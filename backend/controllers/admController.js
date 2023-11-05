const { Adm: AdmModel } = require('../models/Adm')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// helpers
const createUserToken = require('../helpers/create-user-token')

const admController = {
    register: async(req, res) => {
        const { name, password } = req.body

        if(!name || !password){
            res.status(422).json({
                message: 'Um ou mais campos obrigatórios não forma preenchidos!'
            })
            return
        }

        const admExists = await AdmModel.findOne({name: name})

        if(admExists){
            res.status(422).json({
                message: "Nome de usuário já cadastrado no sistema"
            })
            return
        }

        // Criando uma senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const adm = {
            name,
            password: passwordHash
        }


        try {
            const response = await AdmModel.create(adm)
            res.status(201).json({
                message: 'Adm criado!',
                response
            })
        } catch (error) {
            res.status(500).json({message: error})
        }

    },

    login: async(req, res) => {
        const {name, password} = req.body

        if(!name || !password ){
            res.status(422).json({message: 'Um ou mais campos obrigatórios não foram preenchidos!'})
            return
        }

        const adm = await AdmModel.findOne({name: name})

        if(!adm){
            res.status(422).json({
                message: "Este usuário não está cadastrado no sistema"
            })
            return
        }

        const checkPassword = await bcrypt.compare(password, adm.password)

        if(!checkPassword){
            res.status(422).json({
                message: "senha inválida!"
            })
            return
        }

        await createUserToken(adm, req, res)
    }
}


module.exports = admController