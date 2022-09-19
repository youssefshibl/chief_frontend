import JwtConfig from "./JwtConfig";

export default class jwtService {
  // Will be used by this service for making API calls
  axiosIns = null;

  // jwtConfig <= Will be used by this service
  jwtConfig = { ...JwtConfig };
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns;
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // set interceptors for my instance from axios

    this.axiosIns.interceptors.request.use((config) => {
      // Get token from localStorage
      const accessToken = this.getToken();

      if (accessToken) {
        config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    });
  }

  // get token from localstorage
  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }
  // set token value in localstorage
  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }
  // login method & retrun response of request
  async login(...args) {
    return this.axiosIns.post(this.jwtConfig.loginEndpoint, ...args);
  }
  // register method & retrun response of request
  async register(...args) {
    return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args);
  }
  // refreshtoken method
  async refreshToken() {
    return this.axiosIns.post(this.jwtConfig.refreshEndpoint);
  }
  // check method
  async me() {
    return this.axiosIns.post(this.jwtConfig.MeEndpostn);
  }
}
