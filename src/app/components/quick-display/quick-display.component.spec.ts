import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDisplayComponent } from './quick-display.component';

describe('QuickDisplayComponent', () => {
  let component: QuickDisplayComponent;
  let fixture: ComponentFixture<QuickDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
