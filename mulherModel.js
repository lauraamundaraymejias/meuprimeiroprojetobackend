import mongoose from 'mongoose'


const MulherSchema = new mongoose.Schema({

    nome: {

        type: String,

        required: true

    },

    imagem: {

        type: String,

        required: true

    },

    minibio: {

        type: String,

        required: true

    },

    citacao: {

        type: String,

        required: true

    }

})



export default mongoose.model('diva', MulherSchema)
