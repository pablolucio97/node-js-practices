import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class vehicles1604439927929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'vehicles',
            columns : [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'brand',
                    type: 'varchar',
                },
                {
                    name: 'model',
                    type: 'varchar',
                },
                {
                    name: 'year',
                    type: 'integer',
                },
                {
                    name: 'engine',
                    type: 'float',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles')
    }

}
