// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseApiUrl: 'http://localhost:3030',
  google: {
    clientId: '968991795000-m7hs50col31r4j1lc9qqp8e2dgj82tep.apps.googleusercontent.com',
    redirectURI: 'http://localhost:4200/auth/google'
  }
};
