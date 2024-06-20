import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import videos from '../assets/videos.json';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

export interface Videos {
  id: number;
  title: string;
  description: string;
  rating: number;
  poster?: string;
  youtubeID?: string;
  customPlayerID?: string;
}

@Component({
  selector: 'app-single-video',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss'],
})
export class SingleVideoComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  video: Videos | undefined;
  youtubeEmbedUrl: SafeResourceUrl | undefined;
  useYouTubePlayer: boolean = false;
  playerInitialized: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const videoId = +params['id'];
      this.video = videos.find((video) => video.id === videoId);
      if (this.video) {
        if (this.video.youtubeID) {
          this.useYouTubePlayer = true;
          this.youtubeEmbedUrl = this.getSafeUrl(`https://www.youtube.com/embed/${this.video.youtubeID}`);
        } else {
          this.useYouTubePlayer = false;
        }
      }
    });
  }

  ngAfterViewInit() {
    if (!this.useYouTubePlayer && this.video?.customPlayerID && this.videoPlayer) {
      const player = videojs(this.videoPlayer.nativeElement, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        type: 'video/mp4',
        playbackRates: [0.5, 1, 1.5, 2],
        poster: this.video.poster,
      });

      player.ready(() => {
        player.volume(0.1);
      });
      this.playerInitialized = true;
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getUserVideoQuality(): string {
    const subType = this.localStorageService.getFieldFromUserLocalStorage('subscriptionType');
    if (subType) {
      return subType === 'premium' ? '1440p' : '720p';
    } else {
      return '720p';
    }
  }

  getVideoSource(customPlayerID?: string): string {
    const getUserVideoQuality = this.getUserVideoQuality();
    return `${customPlayerID}-${getUserVideoQuality}.mp4`;
  }
}
