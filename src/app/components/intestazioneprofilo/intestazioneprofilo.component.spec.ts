import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntestazioneprofiloComponent } from './intestazioneprofilo.component';

describe('IntestazioneprofiloComponent', () => {
  let component: IntestazioneprofiloComponent;
  let fixture: ComponentFixture<IntestazioneprofiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntestazioneprofiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntestazioneprofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
