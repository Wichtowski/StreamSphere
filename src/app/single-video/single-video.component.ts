
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import videos from '../assets/videos.json';
import videojs from 'video.js';

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
  imports: [CommonModule, NgIf, RouterLink],
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss'],
})
export class SingleVideoComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  video: Videos | undefined;
  youtubeEmbedUrl: SafeResourceUrl | undefined;
  useYouTubePlayer: boolean = false;
  playerInitialized: boolean = false;
  hideButtonTimeout: any;

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

    this.resetHideButtonTimeout();
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

  @HostListener('document:mousemove', [])
  @HostListener('document:touchstart', [])
  onUserInteraction(): void {
    this.resetHideButtonTimeout();
    const backButton = document.querySelector('.back-button') as HTMLElement;
    if (backButton) {
      backButton.classList.remove('hidden');
    }
  }

  resetHideButtonTimeout(): void {
    clearTimeout(this.hideButtonTimeout);
    this.hideButtonTimeout = setTimeout(() => {
      const backButton = document.querySelector('.back-button') as HTMLElement;
      if (backButton) {
        backButton.classList.add('hidden');
      }
    }, 1500);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getUserVideoQuality(): string {
    const subType = this.localStorageService.getFieldFromUserLocalStorage('subscriptionType', 'userData');
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
