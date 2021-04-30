import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckBarComponent } from './luck-bar.component';

describe('LuckBarComponent', () => {
  let component: LuckBarComponent;
  let fixture: ComponentFixture<LuckBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
