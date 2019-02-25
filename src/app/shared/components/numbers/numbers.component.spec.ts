import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NumbersComponent } from './numbers.component';
import { AppModule } from 'src/app/app.module';

describe('NumbersComponent', () => {
  let component: NumbersComponent;
  let fixture: ComponentFixture<NumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NumbersComponent', () => {
    expect(component).toBeTruthy();
  });
});
