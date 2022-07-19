import axios from 'axios';
import { httpRequest } from '../http/httpRequest';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

export const apiRequest = new httpRequest(axiosInstance);
