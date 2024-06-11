import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanFlavorComponent } from './bean-flavor.component';

describe('BeanFlavorComponent', () => {
  let component: BeanFlavorComponent;
  let fixture: ComponentFixture<BeanFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanFlavorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeanFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
