import { MigrationInterface, QueryRunner } from 'typeorm';
import { User, Recipe, Rating } from '@entities';
import { users, recipes, ratings } from '@seeds';

export class Seed1716907720437 implements MigrationInterface {
  name = 'Seed1716907720437';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersSeed = users;
    const recipesSeed = recipes;
    const ratingsSeed = ratings;

    await queryRunner.connection.getRepository(User).save(usersSeed);
    await queryRunner.connection.getRepository(Recipe).save(recipesSeed);
    await queryRunner.connection.getRepository(Rating).save(ratingsSeed);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
