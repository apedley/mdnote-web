import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { CategoryItemComponent } from './category-item.component';
import { AppMaterialModule } from '../../../core/app-material.module';
import { RouterLinkStubDirective } from '../../../../../testing/router-stubs';
import { NotesListComponent } from '../notes-list/notes-list.component';

describe('Component: CategoryItemComponent', () => {
  let fixture: ComponentFixture<CategoryItemComponent>;
  let categoryItemComponent: CategoryItemComponent;
  let element: any;
  let debugElement: DebugElement;
  // let queryTitleDebugElement: DebugElement;
  // let queryTitleHTMLElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppMaterialModule ],
      declarations: [ CategoryItemComponent, NotesListComponent, RouterLinkStubDirective ],
      providers: [

      ]
    });

    fixture = TestBed.createComponent(CategoryItemComponent);
    categoryItemComponent = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should render name A Name in titlecase with a note count', () => {
    categoryItemComponent.category = {
      id: '3',
      name: 'a name',
      notes: []
    };

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const h3 = element.querySelector('h3');
      expect(h3.textContent).toContain('A Name');
      expect(h3.textContent).toContain('0');
    });
  });

});
