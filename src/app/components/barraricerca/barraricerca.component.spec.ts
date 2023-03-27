import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraricercaComponent } from './barraricerca.component';

describe('BarraricercaComponent', () => {
  let component: BarraricercaComponent;
  let fixture: ComponentFixture<BarraricercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraricercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraricercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
