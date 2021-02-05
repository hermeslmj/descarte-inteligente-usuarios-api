const mongoose = require("mongoose");

let schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
	password: { //devera ser um hash ou algo que 'esconda' a senha
        type: String,
        required: true
    },
	cidade: {
        type: String,
        required: true
    },
	estado: {
        type: String,
        required: true
    },
	idade: {
        type: Number,
        required: true

    },
	criado_em: {
        type: Date
    }
});

const UsuariosModel = mongoose.model('usuarios', schema);

module.exports = UsuariosModel;
