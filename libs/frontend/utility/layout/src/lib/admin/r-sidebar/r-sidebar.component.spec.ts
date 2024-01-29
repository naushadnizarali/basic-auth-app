import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RSidebarComponent } from './r-sidebar.component';

describe('RSidebarComponent', () => {
  let component: RSidebarComponent;
  let fixture: ComponentFixture<RSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
