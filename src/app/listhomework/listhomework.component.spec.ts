import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhomeworkComponent } from './listhomework.component';

describe('ListhomeworkComponent', () => {
  let component: ListhomeworkComponent;
  let fixture: ComponentFixture<ListhomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
