import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPostComponent } from './pagina-post.component';

describe('PaginaPostComponent', () => {
  let component: PaginaPostComponent;
  let fixture: ComponentFixture<PaginaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
