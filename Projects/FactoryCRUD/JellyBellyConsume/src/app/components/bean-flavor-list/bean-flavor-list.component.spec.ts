import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanFlavorListComponent } from './bean-flavor-list.component';

describe('BeanFlavorListComponent', () => {
  let component: BeanFlavorListComponent;
  let fixture: ComponentFixture<BeanFlavorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanFlavorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeanFlavorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
