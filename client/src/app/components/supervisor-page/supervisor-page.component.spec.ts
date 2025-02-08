import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorPageComponent } from './supervisor-page.component';

describe('SupervisorPageComponent', () => {
  let component: SupervisorPageComponent;
  let fixture: ComponentFixture<SupervisorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupervisorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
