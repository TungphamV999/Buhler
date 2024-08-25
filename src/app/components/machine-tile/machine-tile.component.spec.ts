import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTileComponent } from './machine-tile.component';

describe('MachineTileComponent', () => {
  let component: MachineTileComponent;
  let fixture: ComponentFixture<MachineTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
