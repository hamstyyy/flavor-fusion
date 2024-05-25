import axios from 'axios';
import {useEffect} from 'react';
import {getJwt, setJwt} from '../services/auth.service';

const useAxiosInterceptors = () => {
  useEffect(() => {
    axios.interceptors.request.use(async req => {
      const headers: any = {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        'If-Modified-Since': '0',
      };

      const jwtToken = await getJwt();

      if (jwtToken) {
        headers.authorization = `Bearer ${jwtToken}`;
      }

      req.headers = headers;
      return req;
    });

    axios.interceptors.response.use(res => {
      const jwtToken = res.headers['jwt-token'];

      if (jwtToken) {
        setJwt(jwtToken);
      }
      return res;
    });
  }, []);
};

export default useAxiosInterceptors;
