import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaCreateComponent } from './denuncia-create.component';

describe('DenunciaCreateComponent', () => {
  let component: DenunciaCreateComponent;
  let fixture: ComponentFixture<DenunciaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
