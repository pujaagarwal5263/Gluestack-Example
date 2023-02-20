class Mutations{
   insertUser = `mutation($name: String, $email: String){
    insert_user_one(object: {name: $name, email: $email}) {
      id
      name
      email
    }
   }`;

   removeUser = `mutation($email: String){
    delete_user(where: {_or: {email: {_eq: $email}}}) {
        returning {
          id
          name
          email
        }
      }
   }`;
};

module.exports = new Mutations();