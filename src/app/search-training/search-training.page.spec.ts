import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTrainingPage } from './search-training.page';

describe('SearchTrainingPage', () => {
  let component: SearchTrainingPage;
  let fixture: ComponentFixture<SearchTrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrainingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
