import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderxComponent } from './headerx.component';

describe('HeaderxComponent', () => {
  let component: HeaderxComponent;
  let fixture: ComponentFixture<HeaderxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
