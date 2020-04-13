module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
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

  Item.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};
 