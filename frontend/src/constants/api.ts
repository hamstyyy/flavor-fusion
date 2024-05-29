import Config from 'react-native-config';

export const Api = {
  // AUTH
  LOGIN: `${Config.API_URL}/auth/login`,
  SIGN_UP: `${Config.API_URL}/auth/sign-up`,

  // RECIPE
  RECIPE_LIST: `${Config.API_URL}/recipes`,
};
