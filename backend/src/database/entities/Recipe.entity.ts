import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User.entity';
import { Rating } from './Rating.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column()
  servings: number;

  @ManyToOne(() => User, (user) => user.recipes, {
    cascade: true,
  })
  @JoinColumn({ name: 'author' })
  author: User;

  @OneToMany(() => Rating, (rating) => rating.recipe)
  ratings: Rating[];
}
