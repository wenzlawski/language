import axios from "axios";
import { apiUrl } from "./env";

// function authHeaders(token: string) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// }

class Api {
  private headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }

  get axiosInstance() {
    return axios.create({
      baseURL: apiUrl,
      headers: this.headers
    })
  }

  get get() {
    return this.axiosInstance.get
  }

  get post() {
    return this.axiosInstance.post
  }

  get patch() {
    return this.axiosInstance.patch
  }

  setAuthorization(token: string): void {
    this.headers.Authorization = `Bearer ${token}`
  }

  getEcho(msg: string) {
    return this.post(`/api/v1/utils/echo/`, {
      msg: msg
    });
  }

  logInGetToken(username: string, password: string) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    return this.post('/api/v1/login/access-token', params, config);
  }
}

const api = new Api()

export default api

// export const api = {
//   async getEcho(msg: string) {
//     return axios.post(`${apiUrl}/api/v1/utils/echo/`, {
//       msg: msg
//     });
//   },
  // async logInGetToken(username: string, password: string) {
  //   const params = new URLSearchParams();
  //   params.append("username", username);
  //   params.append("password", password);

  //   return axios.post(`${apiUrl}/api/v1/login/access-token`, params);
  // },
  // async getMe(token: string) {
  //   return axios.get<IUserProfile>(`${apiUrl}/api/v1/users/me`, authHeaders(token));
  // },
  // async updateMe(token: string, data: IUserProfileUpdate) {
  //   return axios.put<IUserProfile>(
  //     `${apiUrl}/api/v1/users/me`,
  //     data,
  //     authHeaders(token),
  //   );
  // },
  // async getUsers(token: string) {
  //   return axios.get<IUserProfile[]>(`${apiUrl}/api/v1/users/`, authHeaders(token));
  // },
  // async updateUser(token: string, userId: number, data: IUserProfileUpdate) {
  //   return axios.put(`${apiUrl}/api/v1/users/${userId}`, data, authHeaders(token));
  // },
  // async createUser(token: string, data: IUserProfileCreate) {
  //   return axios.post(`${apiUrl}/api/v1/users/`, data, authHeaders(token));
  // },
  // async passwordRecovery(email: string) {
  //   return axios.post(`${apiUrl}/api/v1/password-recovery/${email}`);
  // },
  // async resetPassword(password: string, token: string) {
  //   return axios.post(`${apiUrl}/api/v1/reset-password/`, {
  //     new_password: password,
  //     token,
  //   });
  // },
// };
