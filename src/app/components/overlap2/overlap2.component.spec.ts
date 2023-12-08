import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlap2Component } from './overlap2.component';

describe('Overlap2Component', () => {
  let component: Overlap2Component;
  let fixture: ComponentFixture<Overlap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overlap2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Overlap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
