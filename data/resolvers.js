import { Friends } from './dbConnectors';

//resolvers is responsible for populating the data for fields in schema
export const resolvers = {
    Query: {
        getOneFriend: (root, { id }) => {
            //calling into a server, so we need a response before we can resolve query
            return new Promise((resolve, object) => {
                Friends.findById(id, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                });
            });
        },
    },
    Mutation: {
        createFriend: (root, { input }) => 
        {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                contacts: input.contacts,
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if(err) reject(err)
                    else resolve(newFriend)
                });
            });
        },
        updateFriend: (root, { input }) => 
        {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({_id: input.id}, input, { new: true }, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                });
            });
        },
        deleteFriend: (root, { id }) => 
        {
            return new Promise((resolve, object) => {
                Friends.remove({_id: id}, (err) => {
                    if(err) reject(err)
                    else resolve('Successfully deleted friend.')
                });
            });
        }
    },
};