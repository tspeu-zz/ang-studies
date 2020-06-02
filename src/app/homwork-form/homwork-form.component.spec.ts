import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomworkFormComponent } from './homwork-form.component';

describe('HomworkFormComponent', () => {
  let component: HomworkFormComponent;
  let fixture: ComponentFixture<HomworkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomworkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
