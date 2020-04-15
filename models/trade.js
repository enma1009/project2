module.exports = function(sequelize, DataTypes) {
  var Trade = sequelize.define("Trade", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    itemCategory: {
      type: DataTypes.STRING
    },
    imgName: {
      type: DataTypes.STRING
    }
  });

  Trade.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Trade.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Trade;
};
 