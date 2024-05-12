import {doPost} from './rest.service';
import {Api} from '../constants/api';
import {CreateUser} from './../interfaces';

export const login = async (email: string, password: string) => {
  return doPost(Api.LOGIN, {
    email,
    password,
  });
};

export const signUp = async (user: CreateUser) => {
  return doPost(Api.SIGN_UP, user);
};
