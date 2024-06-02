import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './Recipe.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipes: Recipe[];
}
