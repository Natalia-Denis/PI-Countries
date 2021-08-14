const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define ('tourism',{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    dificultad:{ 
      type: DataTypes.ENUM("1", "2","3", "4", "5") ,
    allowNull: true
     },
     duracion: {
       type : DataTypes.INTEGER,
       allowNull: true
     },
     temporada:{ 
    type: DataTypes.ENUM("Verano", "Otoño","Invierno", "Primavera") ,
    allowNull: true
     },
  })
};

