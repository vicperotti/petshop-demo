import { Sequelize, DataTypes, Model } from "sequelize";
import { starterpets } from "../data/starter-pets.js";

const sequelize = new Sequelize("sqlite:../data/database.sqlite");

const { STRING, INTEGER, FLOAT, TEXT } = DataTypes;

class Pet extends Model {}

Pet.init(
  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    petname: TEXT,
    pettype: TEXT,
    petphoto: TEXT,
    petprice: FLOAT
  },
  {
    sequelize,
  }
);

class User extends Model {}

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: { type: STRING, allowNull: false, unique: true },
    firstName: { type: STRING, allowNull: false },
    lastName: { type: STRING, allowNull: false },
    passwordHash: { type: STRING, allowNull: false },
  },
  {
    sequelize,
    name: {
      singular: "user",
      plural: "users",
    },
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


export { Pet, User };
