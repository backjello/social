import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonecommentiComponent } from './bottonecommenti.component';

describe('BottonecommentiComponent', () => {
  let component: BottonecommentiComponent;
  let fixture: ComponentFixture<BottonecommentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonecommentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonecommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
