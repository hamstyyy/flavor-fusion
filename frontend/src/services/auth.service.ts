import {doPost} from './rest.service';
import {Api} from '../constants/api';
import {User} from './../interfaces';
import asyncStorage from '@react-native-async-storage/async-storage';

const JWT_KEY = 'jwt';

export const login = async (email: string, password: string): Promise<User> => {
  return doPost(Api.LOGIN, {
    email,
    password,
  });
};

export const setJwt = async (jwt: string) =>
  await asyncStorage.setItem(JWT_KEY, jwt);

export const getJwt = async (): Promise<string | null> =>
  await asyncStorage.getItem(JWT_KEY);

export const signUp = async (user: User): Promise<User> => {
  return doPost(Api.SIGN_UP, user);
};
