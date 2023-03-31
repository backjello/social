import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondividiComponent } from './condividi.component';

describe('CondividiComponent', () => {
  let component: CondividiComponent;
  let fixture: ComponentFixture<CondividiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondividiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondividiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
