import db from '../models'

// GET CURRENT
export const getOne = (gmail) => new Promise(async (resolve, reject) => {
    db.Account.hasOne(db.Customer, {
        foreignKey: 'accountID'
      });
      db.Customer.belongsTo(db.Account, {
        foreignKey: 'accountID'
      });

    db.Account.hasMany(db.Hotel, {
        foreignKey: 'accountID'
      });
    db.Hotel.belongsTo(db.Account, {
        foreignKey: 'accountID'
      });
      db.Hotel.hasMany(db.Photo, {
        foreignKey: 'hotelID'
      });
    db.Photo.belongsTo(db.Hotel, {
        foreignKey: 'hotelID'
      });

      console.log(gmail)
    try {
        const response = await db.Account.findOne({
            include:[
                {
                   model: db.Customer,
                   model: db.Hotel,
                   include: db.Photo

                
                }
            ],
            where: { gmail:gmail },
            
            
          
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get provinces.',
            response
        })
    } catch (error) {
        reject(error)
    }
})