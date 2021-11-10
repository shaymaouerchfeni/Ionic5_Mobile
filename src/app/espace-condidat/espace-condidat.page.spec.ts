import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspaceCondidatPage } from './espace-condidat.page';

describe('EspaceCondidatPage', () => {
  let component: EspaceCondidatPage;
  let fixture: ComponentFixture<EspaceCondidatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCondidatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspaceCondidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
