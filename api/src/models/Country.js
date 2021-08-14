const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
