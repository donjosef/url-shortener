const mongoose = require('mongoose')

const connectToDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://montyDev_:p8zYXmvnKRmHxiV@cluster0.gjhnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  { useNewUrlParser: true })

        console.log('Connection to mongodb created!')

    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB