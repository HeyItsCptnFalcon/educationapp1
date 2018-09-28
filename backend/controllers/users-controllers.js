const Users= require('../models/users')

const getAllUsers = (req, res) => {
    Users.find()        //this Users has to match const Users = require('../models/users')
        .exec((err, users) => {
            if (err) { res.status(500).send({ message: `There was an error with our database. `, error: err.message}) 
            }else if (users.length === 0){
                res.status(404).send({ message: 'There werew no users found' })
            }else {
                res.status(200).send({users});
            }
        });
    
}

const getById = (req, res) => {
    Users.findById(req.params.id)
        .exec((err, user) => {
            if (err) {res.status(500).send({ message: `There was an error with our database. `, error: err.message});      
            }else if (!user) {
                res.status(404).send({ message: 'Could not find a user with that id' });
            }else {
                res.status(200).send(user);
            }
        });
}

const createUser =(req, res) => {
    let user = req.body;
    console.log(user)

    Users.create(user)
        .then((user) =>{
            res.status(200).send({user, message: 'User - Create'});
        })
        .catch((err) => {
            res.status(500).send({ Error : err. message })
        }) 
   
}

const updateUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true}, (err, user) => {     //{$set: req.body} update object being sent into database
        if (err){                                                                           //User.findByIdAndUpdate is a mongoose function
            res.status(500).send({ message: `There was an error with our database. `, error: err.message});
        }else if (!user){
            res.status(404).send({ message: 'Could not find a user with that id' });
        }else {
            res.status(200).send(user);
        }
   })
}

const destroyUser= (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, user) => {              //User.findByIdAndRemove is a mongoose function
        if (err){
            res.status(500).send({ message: `There was an error with our database. `, error: err.message});
        }else if (!user){
            res.status(404).send({ message: 'Could not find a user with that id' });
        }else {
            res.status(200).send({deletedUser: user});
        }
    });
}

module.exports = { getAllUsers, getById, createUser, updateUser, destroyUser}