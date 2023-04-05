import Keycloak from 'keycloak-js';

class KeycloakService {
  constructor() {
    const keycloakConfig = {
      url: 'http://localhost:8080/auth/',
      realm: 'yassaminakh',
      clientId: 'myapp'
    };
    this.keycloak = new Keycloak(keycloakConfig);
  }

  init() {
    return this.keycloak.init({ onLoad: 'login-required' });
  }

  getToken() {
    return this.keycloak.token;
  }

  logout() {
    return this.keycloak.logout();
  }
}

export default new KeycloakService();
