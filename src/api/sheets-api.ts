import type { AxiosInstance } from 'axios'

export class Api {
  constructor(private axios: AxiosInstance) {
    this.axios = axios
  }

  getSpreadSheet(values: string) {
  }
}