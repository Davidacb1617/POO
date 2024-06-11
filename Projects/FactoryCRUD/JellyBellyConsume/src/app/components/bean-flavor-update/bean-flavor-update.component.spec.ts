import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanFlavorUpdateComponent } from './bean-flavor-update.component';

describe('BeanFlavorUpdateComponent', () => {
  let component: BeanFlavorUpdateComponent;
  let fixture: ComponentFixture<BeanFlavorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanFlavorUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeanFlavorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
