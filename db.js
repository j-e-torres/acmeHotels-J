const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/acmehotel');

const guestArr = ['moe', 'curly', 'larry'];
const hotelArr = ['hilton', 'sheraton'];


const Guest = db.define('guest', {
    name: { type: Sequelize.STRING, allowNull: false }
})

const Hotel = db.define('hotel', {
    name: { type: Sequelize.STRING, allowNull: false }
})

const Stay = db.define('stay', {
    days: { type: Sequelize.INTEGER, allowNull: false }
})

const syncAndSeed = () => {
    return db.sync( {force: true })
        .then(async () => {
            const [moe, curly, larry] = await Promise.all(guestArr.map(
                guest => Guest.create( {guest} )
            ))

            const [hilton, sheraton] = await Promise.all(hotelArr.map(
                hotel => Hotel.create( {hotel} )
            ))
        })
}

