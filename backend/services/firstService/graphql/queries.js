class Queries {
    Users = `query MyQuery {
        user {
          id
          email
          name
        }
      }
      `;
    
      getUserID = `query MyQuery($email: String) {
        user(where: {email: {_eq: $email}}) {
          id
        }
      }`
  }
  
  module.exports = new Queries();