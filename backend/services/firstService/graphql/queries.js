class Queries {
    Users = `query MyQuery {
        user {
          id
          email
          name
        }
      }
      `;
  }
  
  module.exports = new Queries();