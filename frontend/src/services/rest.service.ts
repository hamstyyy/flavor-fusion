import axios from 'axios';

export const doGet = async <T>(url: string, config = {}): Promise<T> => {
  const response = await axios.get<T>(url, config);

  return response.data;
};

export const doPost = async <T>(
  url: string,
  data: any,
  config = {},
): Promise<T> => {
  const response = await axios.post<T>(url, data, config);

  return response.data;
};

export const doPut = async <T>(
  url: string,
  data: any,
  config = {},
): Promise<T> => {
  const response = await axios.put<T>(url, data, config);

  return response.data;
};

export const doDelete = async <T>(url: string, config = {}): Promise<T> => {
  const response = await axios.delete<T>(url, config);

  return response.data;
};
