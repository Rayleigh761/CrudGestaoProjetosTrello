import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosViewComponent } from './produtos-view.component';

describe('ProdutosViewComponent', () => {
  let component: ProdutosViewComponent;
  let fixture: ComponentFixture<ProdutosViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosViewComponent]
    });
    fixture = TestBed.createComponent(ProdutosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
