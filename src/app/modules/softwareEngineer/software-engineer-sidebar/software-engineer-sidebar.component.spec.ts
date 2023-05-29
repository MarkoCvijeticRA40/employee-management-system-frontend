import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerSidebarComponent } from './software-engineer-sidebar.component';

describe('SoftwareEngineerSidebarComponent', () => {
  let component: SoftwareEngineerSidebarComponent;
  let fixture: ComponentFixture<SoftwareEngineerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
