import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRepositories1605637921758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'repositories',
            columns : [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'link',
                    type: 'varchar',
                },
                {
                    name: 'commits',
                    type: 'integer',
                },
                {
                    name: 'owner_id',
                    type: 'integer',
                },
            ],
            foreignKeys : [
                {
                    name : 'owner_repositorie',
                    columnNames: ['owner_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'owners',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('repositories')
    }

}
