const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    
    type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
    }

    type Event{
      _id:ID!
      title:String!
      description:String!
      price:Float! 
      date:String!
      creator:User!
      bookings:[Booking]
    }
      
    type User{
      _id:ID!
      email:String!
      password:String
      createdEvents:[Event!]
      bookings:[Booking]
    }
      

    

    input EventInput{
      title:String!
      description:String!
      price:Float!
      date:String!
    }

    input UserInput{
      email:String!
      password:String!
    }
    
    type AuthData{
       userId:ID!
       token:String!
       tokenExpiration:Int!
    }

    type RootMutation{
       createEvent(input:EventInput):Event
       createUser(input:UserInput):User
       bookEvent(eventId: ID!): Booking!
       cancelBooking(bookingId: ID!): Event!
       login(email: String!, password: String!): AuthData!
    }

    type RootQuery{
       events :[Event!]!
       users:[User!]! 
       bookings:[Booking!]!
    }

    schema{
        query:RootQuery
        mutation:RootMutation
    }
    
    `);
