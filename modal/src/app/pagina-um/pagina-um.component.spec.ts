import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUmComponent } from './pagina-um.component';

describe('PaginaUmComponent', () => {
  let component: PaginaUmComponent;
  let fixture: ComponentFixture<PaginaUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
