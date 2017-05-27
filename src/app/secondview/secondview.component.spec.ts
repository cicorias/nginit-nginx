import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondviewComponent } from './secondview.component';

describe('SecondviewComponent', () => {
  let component: SecondviewComponent;
  let fixture: ComponentFixture<SecondviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
