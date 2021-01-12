import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTesteComponent } from './modal-teste.component';

describe('ModalTesteComponent', () => {
  let component: ModalTesteComponent;
  let fixture: ComponentFixture<ModalTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
