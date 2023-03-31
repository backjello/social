import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcondivisioneComponent } from './popupcondivisione.component';

describe('PopupcondivisioneComponent', () => {
  let component: PopupcondivisioneComponent;
  let fixture: ComponentFixture<PopupcondivisioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcondivisioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupcondivisioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
