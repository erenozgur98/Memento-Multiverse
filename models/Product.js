const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        idproducts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        show: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fake_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fun_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fake_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fake_sold: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;
