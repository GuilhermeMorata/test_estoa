import { Sequelize } from 'sequelize-typescript';
import { PlanTable } from 'src/entity/plan.entity';
import { SignatureTable } from 'src/entity/signature.entity';
import { UserTable } from 'src/entity/user.entity';
import initial from './initial';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'root',
        database: 'test_db',
        define:{
          timestamps: true
        }
      });
      sequelize.addModels([UserTable, PlanTable , SignatureTable ])
      SignatureTable.belongsTo(UserTable,{foreignKey: 'id_user', targetKey: 'id_user'})
      SignatureTable.belongsTo(PlanTable,{foreignKey: 'id_Plan', targetKey: 'id_Plan'})
      await sequelize.sync();
      await initial(); //maybe change to migrate
      return sequelize;
    },
  },
];