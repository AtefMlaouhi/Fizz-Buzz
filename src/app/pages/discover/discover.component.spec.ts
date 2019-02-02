import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { DiscoverComponent } from './discover.component';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DiscoverComponent', () => {
    expect(component).toBeTruthy();
  });
});
