import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Recipe } from './Recipe.entity';

@Entity()
export class Rating {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: number;

  @Column()
  rating: number;

  @Column()
  description: string;

  @Column()
  createdAt: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ratings, {
    cascade: true,
  })
  @JoinColumn({ name: 'recipe' })
  recipe!: string;
}
