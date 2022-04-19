import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalReferenceDemoComponent } from './local-reference-demo.component';

describe('LocalReferenceDemoComponent', () => {
  let component: LocalReferenceDemoComponent;
  let fixture: ComponentFixture<LocalReferenceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalReferenceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalReferenceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
