import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePensComponent } from './code-pens.component';

describe('CodePensComponent', () => {
  let component: CodePensComponent;
  let fixture: ComponentFixture<CodePensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodePensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodePensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
