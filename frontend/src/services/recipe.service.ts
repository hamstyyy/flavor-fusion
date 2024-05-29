import {Api} from '../constants/api';
import {Recipe} from '../interfaces';
import {doGet} from './rest.service';

export const getList = async () => {
  return doGet<Recipe[]>(Api.RECIPE_LIST);
};
