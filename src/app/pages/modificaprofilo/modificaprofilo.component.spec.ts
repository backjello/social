import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaprofiloComponent } from './modificaprofilo.component';

describe('ModificaprofiloComponent', () => {
  let component: ModificaprofiloComponent;
  let fixture: ComponentFixture<ModificaprofiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaprofiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaprofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
