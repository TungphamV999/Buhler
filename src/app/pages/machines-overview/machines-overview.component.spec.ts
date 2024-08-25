import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinesOverviewComponent } from './machines-overview.component';

describe('MachinesOverviewComponent', () => {
  let component: MachinesOverviewComponent;
  let fixture: ComponentFixture<MachinesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachinesOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
