import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1716803036450 implements MigrationInterface {
  name = 'CreateTables1716803036450';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL,
        "password" VARCHAR(255) NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "recipe" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "title" VARCHAR(255) NOT NULL,
        "duration" VARCHAR(255) NOT NULL,
        "servings" INT NOT NULL,

        "author" INT,
        CONSTRAINT "FK_recipe_author" FOREIGN KEY ("author") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "rating" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "rating" INT NOT NULL,
        "description" VARCHAR(4000) NOT NULL,
        "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,

        "recipe" INT,
        CONSTRAINT fk_recipe
        FOREIGN KEY("recipe") 
        REFERENCES "recipe"(id)
        ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
