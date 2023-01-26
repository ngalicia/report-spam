import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCreateComponent } from './contacto-create.component';

describe('ContactoCreateComponent', () => {
  let component: ContactoCreateComponent;
  let fixture: ComponentFixture<ContactoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
