import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoeitrComponent } from './favoeitr.component';

describe('FavoeitrComponent', () => {
  let component: FavoeitrComponent;
  let fixture: ComponentFixture<FavoeitrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoeitrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoeitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
