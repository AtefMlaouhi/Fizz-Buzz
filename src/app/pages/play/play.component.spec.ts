import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { PlayComponent } from './play.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayComponent', () => {
    expect(component).toBeTruthy();
  });
});
