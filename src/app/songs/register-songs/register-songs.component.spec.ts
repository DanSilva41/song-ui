import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSongsComponent } from './register-songs.component';

describe('RegisterSongsComponent', () => {
  let component: RegisterSongsComponent;
  let fixture: ComponentFixture<RegisterSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
