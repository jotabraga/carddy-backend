import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAllTables1637029537538 implements MigrationInterface {
    name = 'CreateAllTables1637029537538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "optionalFields" ("id" SERIAL NOT NULL, "cardId" integer NOT NULL, "key" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_ccf66f1b386b95e3690ec1f8d3f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "segments" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_beff1eec19679fe8ad4f291f04e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cards" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "picture" character varying NOT NULL, "qrCode" character varying NOT NULL, "segmentId" integer NOT NULL, CONSTRAINT "PK_5f3269634705fdff4a9935860fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usersCards" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "cardId" integer NOT NULL, CONSTRAINT "PK_58b09b02aa0bfb9e3345afce5d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "token" character varying NOT NULL, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "optionalFields" ADD CONSTRAINT "FK_6a31d83ffc3b72567cd54cc20c7" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usersCards" ADD CONSTRAINT "FK_6e492e6d246e6051c7c73a74295" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "usersCards" DROP CONSTRAINT "FK_6e492e6d246e6051c7c73a74295"`);
        await queryRunner.query(`ALTER TABLE "optionalFields" DROP CONSTRAINT "FK_6a31d83ffc3b72567cd54cc20c7"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "usersCards"`);
        await queryRunner.query(`DROP TABLE "cards"`);
        await queryRunner.query(`DROP TABLE "segments"`);
        await queryRunner.query(`DROP TABLE "optionalFields"`);
    }

}
