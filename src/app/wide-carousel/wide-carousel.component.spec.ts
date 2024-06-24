import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCarouselComponent } from './wide-carousel.component';

describe('WideCarouselComponent', () => {
  let component: WideCarouselComponent;
  let fixture: ComponentFixture<WideCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WideCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WideCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
