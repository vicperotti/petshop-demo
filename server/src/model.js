import { Sequelize, DataTypes, Model } from "sequelize";
import { starterpets } from "../data/starter-pets.js";

const sequelize = new Sequelize("sqlite:../data/database.sqlite");

class Pet extends Model {}

Pet.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    petname: DataTypes.TEXT,
    pettype: DataTypes.TEXT,
    petphoto: DataTypes.TEXT,
    petprice: DataTypes.FLOAT
  },
  {
    sequelize,
  }
);

await sequelize.sync();

// // seed the database!
await Pet.bulkCreate(
  starterpets.map((m) => {
    const { id, ...Pet } = m;
    return Pet;
  })
);

export { Pet };
