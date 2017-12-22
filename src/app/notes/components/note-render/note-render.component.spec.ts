import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {NoteRenderComponent} from './note-render.component';
import { Router } from '@angular/router';
import { RouterLinkStubDirective } from '../../../../../testing/router-stubs';
import { AppMaterialModule } from '../../../core/app-material.module';

import { MarkdownModule } from 'ngx-markdown';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('Component: NoteRenderComponent', () => {
  let fixture: ComponentFixture<NoteRenderComponent>;
  let noteRenderComponent: NoteRenderComponent;
  let element: any;
  let debugElement: DebugElement;
  let queryTitleDebugElement: DebugElement;
  let queryTitleHTMLElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppMaterialModule, MarkdownModule.forRoot() ],
      declarations: [NoteRenderComponent, RouterLinkStubDirective],
      providers: [
        { provide: Router,      useClass: RouterStub }
      ]
    });
    fixture = TestBed.createComponent(NoteRenderComponent);
    noteRenderComponent = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;

    queryTitleDebugElement = fixture.debugElement.query(By.css('h1'));
    queryTitleHTMLElement = queryTitleDebugElement.nativeElement;
  });


  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should render A Title', () => {
    noteRenderComponent.note = {
      title: 'A Title',
      body: 'A Body'
    };
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const h1 = element.querySelector('h1');
      expect(h1.innerText).toBe('A Title');
      expect(queryTitleHTMLElement.textContent).toContain('A Title');
    });
  });

  it('should render A Body', () => {
    noteRenderComponent.note = {
      title: 'A Title',
      body: 'A Body'
    };
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const markdown = element.querySelector('markdown');

      expect(markdown.innerHTML).toContain('A Body');
    });

  });
});
