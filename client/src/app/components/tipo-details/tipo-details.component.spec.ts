import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDetailsComponent } from './tipo-details.component';

describe('TipoDetailsComponent', () => {
  let component: TipoDetailsComponent;
  let fixture: ComponentFixture<TipoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
