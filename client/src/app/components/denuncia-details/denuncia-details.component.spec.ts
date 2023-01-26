import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaDetailsComponent } from './denuncia-details.component';

describe('DenunciaDetailsComponent', () => {
  let component: DenunciaDetailsComponent;
  let fixture: ComponentFixture<DenunciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
