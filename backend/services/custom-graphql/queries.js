class Queries {
    getUsers= `query MyQuery{
        user {
            id
            name
            email
          }
    }`;
} 
  
module.exports = new Queries();
  