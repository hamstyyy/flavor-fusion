import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1716803036450 implements MigrationInterface {
  name = 'CreateTables1716803036450';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" uuid DEFAULT uuid_generate_v4(),
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL,
        "password" VARCHAR(255) NOT NULL,
        CONSTRAINT user_pkey PRIMARY KEY (id)
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "recipe" (
        "id" uuid DEFAULT uuid_generate_v4(),
        "title" VARCHAR(255) NOT NULL,
        "duration" VARCHAR(255) NOT NULL,
        "servings" INT NOT NULL,

        "author" VARCHAR(255),
        CONSTRAINT fk_user
        FOREIGN KEY("userid") 
        REFERENCES "users"(id)
        ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "rating" (
        "id" uuid DEFAULT uuid_generate_v4(),
        "rating" INT NOT NULL,
        "description" VARCHAR(4000) NOT NULL,
        "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,

        "recipe" VARCHAR(255),
        CONSTRAINT fk_recipe
        FOREIGN KEY("recipeid") 
        REFERENCES "recipe"(id)
        ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
