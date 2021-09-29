const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats',
    { useNewUrlParser: true, useUnifiedTopology: true }); //deprecation warnings
//  create collections
//  create schema and model
// Schema: determines how the shape of our data will look like (blueprint)
//////////////////////////////////[Schema]///////////////////////////////////////////

const kittySchema = new mongoose.Schema({
    catName: String,
    breed: String
});

const ownerSchema = new mongoose.Schema({
    ownerName: String,
    cats: [kittySchema] 
})

// build a model from our schema
// schema: drawing phase
// model: creation phase
const myCatModel = mongoose.model('kitten', kittySchema);
const myOwnerModel = mongoose.model('owner', ownerSchema)

function seedKittenCollection() {
    const sherry = new myCatModel({
        catName: 'sherry',
        breed: 'angora'
    })
    const mefleh = new myCatModel({
        catName: 'mefleh',
        breed: 'persian'
    })

    console.log(sherry)
    console.log(mefleh)

    //  to actually save them >> save()
    sherry.save();
    mefleh.save();
}

function seedOwnerCollection() {
    const nemh = new myOwnerModel({
        ownerName: 'nemh',
        cats: [
            { catName: 'sheery', breed: 'balady' }

        ]
    })
    nemh.save();
}
// seedOwnerCollection();
// seedKittenCollection();
// connect express server to mongodb server


module.exports = myOwnerModel;