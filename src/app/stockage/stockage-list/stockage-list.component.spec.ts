import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageListComponent } from './stockage-list.component';

describe('StockageListComponent', () => {
  let component: StockageListComponent;
  let fixture: ComponentFixture<StockageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
