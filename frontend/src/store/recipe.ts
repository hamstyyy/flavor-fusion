import {devtools} from 'zustand/middleware';
import {create} from 'zustand';
import {Recipe} from '../interfaces';
import {getList} from '../services';

interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
};

interface RecipesStore extends RecipesState {
  list: () => Promise<void>;
}

export const useRecipesStore = create(
  devtools<RecipesStore>(
    (set, get) => ({
      ...initialState,

      list: async () => {
        set(state => ({...state, loading: true}));

        try {
          const response = await getList();
          console.log(response, 'RESPONSE');
          set(state => ({
            ...state,
            recipes: response,
          }));
        } catch (err: any) {
          console.log(err, 'ERROR IN GET RECIPE LIST');
          set(state => ({...state}));
        } finally {
          set(state => ({...state, loading: false}));
        }
      },
    }),
    {
      name: 'recipes-store',
    },
  ),
);
