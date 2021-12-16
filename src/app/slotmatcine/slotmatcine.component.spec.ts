import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotmatcineComponent } from './slotmatcine.component';

describe('SlotmatcineComponent', () => {
  let component: SlotmatcineComponent;
  let fixture: ComponentFixture<SlotmatcineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotmatcineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotmatcineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
