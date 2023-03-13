import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcommentiComponent } from './popupcommenti.component';

describe('PopupcommentiComponent', () => {
  let component: PopupcommentiComponent;
  let fixture: ComponentFixture<PopupcommentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcommentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupcommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
