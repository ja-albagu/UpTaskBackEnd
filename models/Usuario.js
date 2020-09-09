const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true, //Es un campo obligatorio
        trim: true //Quita espacios al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trin: true,
        unique: true, //Es un campo unico, que no se puede repetir
        lowercase: true //Inserta los registros en minuscula
    },
    password: {
        type: String,
        required: true,
        trin: true
    },
    registro: {
        type: Date,
        default: Date.now() //El valor por defecto es la fecha actual
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);