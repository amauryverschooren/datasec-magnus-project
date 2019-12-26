import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusscannersComponent } from './virusscanners.component';

describe('VirusscannersComponent', () => {
  let component: VirusscannersComponent;
  let fixture: ComponentFixture<VirusscannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusscannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusscannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
