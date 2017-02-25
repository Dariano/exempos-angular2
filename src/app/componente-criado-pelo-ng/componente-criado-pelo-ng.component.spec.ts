import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCriadoPeloNgComponent } from './componente-criado-pelo-ng.component';

describe('ComponenteCriadoPeloNgComponent', () => {
  let component: ComponenteCriadoPeloNgComponent;
  let fixture: ComponentFixture<ComponenteCriadoPeloNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCriadoPeloNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCriadoPeloNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
