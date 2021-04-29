import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsDialogComponent } from './provisions-dialog.component';

describe('ProvisionsDialogComponent', () => {
  let component: ProvisionsDialogComponent;
  let fixture: ComponentFixture<ProvisionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
