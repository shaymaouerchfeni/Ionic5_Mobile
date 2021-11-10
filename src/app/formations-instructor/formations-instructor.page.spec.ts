import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormationsInstructorPage } from './formations-instructor.page';

describe('FormationsInstructorPage', () => {
  let component: FormationsInstructorPage;
  let fixture: ComponentFixture<FormationsInstructorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsInstructorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormationsInstructorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
