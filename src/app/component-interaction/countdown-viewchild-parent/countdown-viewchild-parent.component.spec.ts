import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownViewchildParentComponent } from './countdown-viewchild-parent.component';

describe('CountdownViewchildParentComponent', () => {
  let component: CountdownViewchildParentComponent;
  let fixture: ComponentFixture<CountdownViewchildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownViewchildParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownViewchildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
