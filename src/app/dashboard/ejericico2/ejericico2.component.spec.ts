import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejericico2Component } from './ejericico2.component';

describe('Ejericico2Component', () => {
  let component: Ejericico2Component;
  let fixture: ComponentFixture<Ejericico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejericico2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejericico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
