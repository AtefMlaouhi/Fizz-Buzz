import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseNumberComponent } from './analyse-number.component';
import { AppModule } from 'src/app/app.module';

describe('AnalyseNumberComponent', () => {
  let component: AnalyseNumberComponent;
  let fixture: ComponentFixture<AnalyseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AnalyseNumberComponent', () => {
    expect(component).toBeTruthy();
  });
});
