import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlapComponent } from './overlap.component';

describe('OverlapComponent', () => {
  let component: OverlapComponent;
  let fixture: ComponentFixture<OverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
