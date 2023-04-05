import KeycloakService from './keycloakService';

class HttpService {
  constructor() {
    this.baseUrl = 'https://your-api-endpoint';
  }

  async request(method, path, data) {
    const token = KeycloakService.getToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    const options = {
      method,
      headers,
      body: data ? JSON.stringify(data) : null
    };
    const response = await fetch(`${this.baseUrl}${path}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  }

  async get(path) {
    return this.request('GET', path);
  }

  async post(path, data) {
    return this.request('POST', path, data);
  }

  async put(path, data) {
    return this.request('PUT', path, data);
  }

  async delete(path) {
    return this.request('DELETE', path);
  }
}

export default new HttpService();
