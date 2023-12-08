import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlap4Component } from './overlap4.component';

describe('Overlap4Component', () => {
  let component: Overlap4Component;
  let fixture: ComponentFixture<Overlap4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overlap4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Overlap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
