import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerTotpStatusComponent } from './project-manager-totp-status.component';

describe('ProjectManagerTotpStatusComponent', () => {
  let component: ProjectManagerTotpStatusComponent;
  let fixture: ComponentFixture<ProjectManagerTotpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerTotpStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerTotpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
