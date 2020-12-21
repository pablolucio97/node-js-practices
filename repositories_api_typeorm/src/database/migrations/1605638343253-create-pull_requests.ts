import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPullRequests1605638343253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pull_requests',
            columns : [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'pr_code',
                    type: 'varchar',
                },
                {
                    name: 'repository_id',
                    type: 'integer',
                },
            ],
            foreignKeys : [
                {
                    name : 'pr_repository',
                    columnNames: ['repository_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'repositories',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pull_requests')
    }

}
