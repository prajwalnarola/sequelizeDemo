module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define('customer',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        age:{
            type: Sequelize.INTEGER
        }
    });
    return customers
}