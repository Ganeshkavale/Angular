import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductonlyGuiComponent } from './addproductonly-gui.component';

describe('AddproductonlyGuiComponent', () => {
  let component: AddproductonlyGuiComponent;
  let fixture: ComponentFixture<AddproductonlyGuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductonlyGuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductonlyGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
