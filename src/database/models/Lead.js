module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        lead_name: {
            type: DataTypes.STRING                 
        },
        email: {
            type: DataTypes.STRING                
        },
        lead_subject: {
            type: DataTypes.STRING
        },
        messenge: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        }
        },   
        {
        tableName: 'leads',
        timestamps: false, 
        })
       
    return Lead;
    }