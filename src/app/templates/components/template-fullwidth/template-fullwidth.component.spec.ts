import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFullwidthComponent } from './template-fullwidth.component';

describe('TemplateFullwidthComponent', () => {
  let component: TemplateFullwidthComponent;
  let fixture: ComponentFixture<TemplateFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFullwidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
