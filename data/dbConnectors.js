import mongoose from 'mongoose';

//mongo connection
//opening a connection to the 'friends' database on our locally running instance of MongoDB
mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true
});

//each schema maps to a MongoDB collection
//and defines the shape of the documents within that collection
const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    contacts: {
        type: Array
    }
});

//To use the schema definition, need to convert friendSchema into a Model we can work with
const Friends = mongoose.model('friends', friendSchema);

export { Friends };
