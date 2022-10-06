import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThinkingsComponent } from './get-thinkings.component';

describe('GetThinkingsComponent', () => {
  let component: GetThinkingsComponent;
  let fixture: ComponentFixture<GetThinkingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetThinkingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetThinkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
