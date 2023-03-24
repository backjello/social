import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNuovoPostComponent } from './popup-nuovo-post.component';

describe('PopupNuovoPostComponent', () => {
  let component: PopupNuovoPostComponent;
  let fixture: ComponentFixture<PopupNuovoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNuovoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupNuovoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
