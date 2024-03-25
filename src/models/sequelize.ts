import { Sequelize } from 'sequelize';

/*
export const sequelize = new Sequelize('task-management-api', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
});
*/

const connectionString = 'mysql://taskmanagementapi_doneaskhad:e1106c67f351a6423c7a6bb21b525d072fe48772@mda.h.filess.io:3307/taskmanagementapi_doneaskhad';

export const sequelize = new Sequelize(connectionString, {
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true,
  },
});
//mysql -u taskmanagementapi_doneaskhad -P 3307 -pe1106c67f351a6423c7a6bb21b525d072fe48772 -h mda.h.filess.io taskmanagementapi_doneaskhad

export async function connectDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
