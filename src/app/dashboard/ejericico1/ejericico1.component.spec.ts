import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejericico1Component } from './ejericico1.component';

describe('Ejericico1Component', () => {
  let component: Ejericico1Component;
  let fixture: ComponentFixture<Ejericico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejericico1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejericico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
