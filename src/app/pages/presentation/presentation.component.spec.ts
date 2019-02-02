import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PresentationComponent', () => {
    expect(component).toBeTruthy();
  });
});
