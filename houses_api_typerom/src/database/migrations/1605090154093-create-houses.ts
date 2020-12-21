import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createHouses1605090154093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'houses',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'number',
                        type: 'integer',
                    },
                    {
                        name: 'location',
                        type: 'varchar',
                    },
                    {
                        name: 'deed_id',
                        type: 'integer',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'DeedsRelation',
                        columnNames: ['deed_id'],
                        referencedTableName: 'deeds',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('houses')
    }

}
