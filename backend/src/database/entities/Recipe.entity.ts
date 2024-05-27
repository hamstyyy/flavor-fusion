import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User.entity';
import { Rating } from './Rating.entity';

@Entity()
export class Recipe {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
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
  author!: string;

  @OneToMany(() => Rating, (rating) => rating.recipe)
  ratings!: Rating[];
}
