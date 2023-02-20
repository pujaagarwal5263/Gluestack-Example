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

   insertTodo = `mutation($todo:String, $user_id: Int){
    insert_todo_one(object: {todo: $todo, user_id: $user_id}) {
        id
        todo
        user_id
      }
   }`;
};

module.exports = new Mutations();