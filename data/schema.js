import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

//GraphQL schema language string (required for makeExecutableSchema).
const typeDefs = `
    type Friend 
    {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        contacts: [Contact]
    }

    enum Gender 
    {
        MALE
        FEMALE
        OTHER
    }

    type Contact 
    {
        firstName: String
        lastName: String
    }

    type Query 
    {
        getOneFriend(id: ID!): Friend
    }

    input FriendInput 
    {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        contacts: [ContactInput]
    }

    input ContactInput 
    {
        firstName: String
        lastName: String
    }

    type Mutation 
    {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };
