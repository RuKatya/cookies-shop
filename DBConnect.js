const mongoose = require('mongoose')

module.exports =  mongoose.connect("", () => {
    console.log('DB Connected')
})