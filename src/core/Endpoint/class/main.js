import Apiconfig from "../API/apiconfig";
import gqlconfig from "../graphql/graphqlconfig";
export default class EndPointService {
  // Will be used by this service for making API calls
  axiosIns = null;

  // jwtConfig <= Will be used by this service
  EndPointConfig = { ...Apiconfig };
  axiosInsgql = null;
  gqlconfig = { ...gqlconfig };
  constructor(
    axiosIns,
    EndPointOverrideConfig,
    axiosInsgql,
    gqlOverrideConfig
  ) {
    this.axiosIns = axiosIns;
    this.EndPointConfig = { ...this.EndPointConfig, ...EndPointOverrideConfig };
    this.axiosInsgql = axiosInsgql;
    this.gqlconfig = { ...this.gqlconfig, ...gqlOverrideConfig };
    // set interceptors for my instance from axios

    this.axiosIns.interceptors.request.use((config) => {
      // Get token from localStorage
      const accessToken = this.getToken();
      if (accessToken) {
        config.headers.Authorization = `${this.EndPointConfig.tokenType} ${accessToken}`;
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    });

    this.axiosInsgql.interceptors.request.use((config) => {
      // Get token from localStorage
      const accessToken = this.getToken();
      if (accessToken) {
        config.headers.Authorization = `${this.EndPointConfig.tokenType} ${accessToken}`;
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    });
  }
  getToken() {
    return localStorage.getItem(this.EndPointConfig.storageTokenKeyName);
  }
  async gQl(querygql, auth = false) {
    if (auth) {
      const accessToken = this.getToken();
      return await this.axiosInsgql.post(
        "",
        {
          query: querygql,
        },
        {
          headers: {
            Authorization: `${this.gqlconfig.tokenType} ${accessToken}`,
          },
        }
      );
    } else {
      return await this.axiosInsgql.post("", {
        query: querygql,
      });
    }
  }
}
