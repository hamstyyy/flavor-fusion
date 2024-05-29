import {User} from './user.interfaces';

export interface Recipe {
  id: number;
  title: string;
  duration: string;
  servings: number;
  ratings?: Rating[];
  author?: User;
}

export interface Rating {
  id: number;
  rating: number;
  description: string;
  createdAt: Date;
}
