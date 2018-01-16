import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-list-item',
  template: `

  <mat-list-item [routerLink]="routerLinkComponents">
    <mat-icon mat-list-icon>{{ iconName }}</mat-icon>
    <h4 mat-line><ng-content></ng-content></h4>
  </mat-list-item>
  `,
  styles: [`
  `]
})
export class SidebarListItemComponent {
  @Input() routerLinkComponents: string[];
  @Input() title: string;
  @Input() iconName: string;

  constructor() {
  }

}
