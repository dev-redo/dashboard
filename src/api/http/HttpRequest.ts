import { AxiosInstance } from 'axios';

type ApiUrlType = '/overall' | '/platform' | '/campaign';

export class httpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get(url: ApiUrlType, queryString = '') {
    return this.service.get(`${url}?${queryString}`).catch(error => {
      console.log('error: ', error);
    });
  }

  patch<T>(id: number, data: T) {
    return this.service.patch(`/${id}`, data);
  }
}
