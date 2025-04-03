import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    const token = this.getToken();
    // return !!token && !this.isTokenExpired(token);
    return !!token;
  }
  
  // isTokenExpired(token: string) {
  isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now();
      }
      return true; // If no expiration, consider it expired
    } catch (error) {
      return true; // Invalid token is considered expired
    }
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;

  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');

  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
    
  }
}

export default new AuthService();
