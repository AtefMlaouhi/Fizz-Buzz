import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { FizzBuzzComponent } from './fizz-buzz.component';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FizzBuzzComponent', () => {
    expect(component).toBeTruthy();
  });
});
