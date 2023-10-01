import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackBarWrapperComponent } from './snack-bar-wrapper.component';

describe('SnackBarWrapperComponent', () => {
  let component: SnackBarWrapperComponent;
  let fixture: ComponentFixture<SnackBarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnackBarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
