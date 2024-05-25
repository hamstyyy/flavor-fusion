import {devtools} from 'zustand/middleware';
import {create} from 'zustand';
import {login, signUp} from '../services/auth.service';
import {User} from '../interfaces';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  isAuthenticated: false,
  loading: false,
};

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signUp: (user: User) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create(
  devtools<AuthStore>(
    (set, get) => ({
      ...initialState,

      login: async (email: string, password: string) => {
        set(state => ({...state, loading: true}));

        try {
          const response = await login(email, password);
          console.log('GOES HERE');
          set(state => ({
            ...state,
            user: response,
            loading: false,
            isAuthenticated: true,
          }));
        } catch (err: any) {
          console.log(err, 'ERROR IN LOGIN');
          set(state => ({...state, loading: false}));
        }
      },
      signUp: async (user: User) => {
        set(state => ({...state, loading: true}));

        try {
          const response = await signUp(user);
          set(state => ({
            ...state,
            user: response,
            loading: false,
            isAuthenticated: true,
          }));
        } catch (err: any) {
          console.log(err, 'ERROR IN REGISTER');
          set(state => ({...state, loading: false}));
        }
      },
      signOut: () => {
        set(state => ({...state, user: null, isAuthenticated: false}));
      },
    }),
    {
      name: 'auth-store',
    },
  ),
);
