import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionesExampleComponent } from './certificaciones-example.component';

describe('CertificacionesExampleComponent', () => {
  let component: CertificacionesExampleComponent;
  let fixture: ComponentFixture<CertificacionesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacionesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacionesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
