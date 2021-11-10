import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspaceFormateurPage } from './espace-formateur.page';

describe('EspaceFormateurPage', () => {
  let component: EspaceFormateurPage;
  let fixture: ComponentFixture<EspaceFormateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceFormateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspaceFormateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
