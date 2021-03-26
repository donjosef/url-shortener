const mongoose = require('mongoose')

const connectToDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI,  { useNewUrlParser: true })

        console.log('Connection to mongodb created!')

    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB