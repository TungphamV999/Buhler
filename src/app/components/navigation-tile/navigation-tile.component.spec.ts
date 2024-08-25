import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTileComponent } from './navigation-tile.component';

describe('NavigationTileComponent', () => {
  let component: NavigationTileComponent;
  let fixture: ComponentFixture<NavigationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
