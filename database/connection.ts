 
import { users } from "../entities/users";
import { createConnection } from "typeorm";

const { 
  DATABASE_TYPE, 
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

export const connection = async () => {
    try {
      //@ts-ignore
      await createConnection({
          type: DATABASE_TYPE,
          host: DATABASE_HOST,
          port: DATABASE_PORT,
          username: DATABASE_USERNAME,
          password: DATABASE_PASSWORD,
          database: DATABASE_NAME,
          entities: [users],
          synchronize: true,
          logging: false,
        });
      console.log("Connected to Database Successfully")
    } catch (error) {
      console.log(`Error ${error}`)
      return ;
    }

}
