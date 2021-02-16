const mongoose = require("mongoose");

let schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
	password: { //devera ser um hash ou algo que 'esconda' a senha
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('login', schema);

module.exports = LoginModel;