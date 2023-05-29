import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerProfileInfoComponent } from './engineer-profile-info.component';

describe('EngineerProfileInfoComponent', () => {
  let component: EngineerProfileInfoComponent;
  let fixture: ComponentFixture<EngineerProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerProfileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
