import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-google',
  template: `
  <div>
  environment: {{ environment }}
  </div>
  `,
})
export class GoogleComponent {
  constructor(private route: ActivatedRoute, private auth: AuthService) {
    const baseURL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token';
    this.route.queryParams.subscribe(queryParams => {
      if (!queryParams.code) { return; }

      this.auth.authenticateWithGoogle(queryParams.code);
    });
  }
}

