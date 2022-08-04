import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelfComponent } from './card-self.component';

describe('CardSelfComponent', () => {
  let component: CardSelfComponent;
  let fixture: ComponentFixture<CardSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
