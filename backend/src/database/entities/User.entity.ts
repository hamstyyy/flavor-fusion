import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Recipe } from './Recipe.entity';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipes!: Recipe[];
}
