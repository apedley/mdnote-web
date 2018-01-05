import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-oauth-list',
  templateUrl: 'oauth-list.component.html',
  styleUrls: ['oauth-list.component.scss']
})
export class OAuthListComponent {

  googleAuth() {
    const base = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = environment.google.clientId;
    const redirectURI = encodeURIComponent(environment.google.redirectURI);
    const scope = encodeURIComponent('https://www.googleapis.com/auth/userinfo.profile');
    const responseType = 'code';

    const url = `${base}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`;

    // document.location.href = url;
    document.location.href = 'https://accounts.google.com/o/oauth2/auth?access_type=online&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me&response_type=code&client_id=968991795000-m7hs50col31r4j1lc9qqp8e2dgj82tep.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauth%2Fgoogle';

  }
}
