import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthsectionComponent } from './fourthsection.component';

describe('FourthsectionComponent', () => {
  let component: FourthsectionComponent;
  let fixture: ComponentFixture<FourthsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
