import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './Recipe.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.ratings, {
    cascade: true,
  })
  @JoinColumn({ name: 'recipe' })
  recipe?: Recipe;
}
