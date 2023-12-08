import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlap3Component } from './overlap3.component';

describe('Overlap3Component', () => {
  let component: Overlap3Component;
  let fixture: ComponentFixture<Overlap3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overlap3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Overlap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
