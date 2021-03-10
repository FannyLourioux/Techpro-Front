import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonePortableComponent } from './telephone-portable.component';

describe('TelephonePortableComponent', () => {
  let component: TelephonePortableComponent;
  let fixture: ComponentFixture<TelephonePortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonePortableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonePortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
