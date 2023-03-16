import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushboxComponent } from './crushbox.component';

describe('CrushboxComponent', () => {
  let component: CrushboxComponent;
  let fixture: ComponentFixture<CrushboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrushboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
