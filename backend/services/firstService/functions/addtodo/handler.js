const Common = require("../../common");
const mutations = require("../../graphql/mutations");
const { getUserID } = require("../../graphql/queries");
const Queries = require("../../graphql/queries")

const getID = async(email)=>{
  let { data, errors } = await Common.GQLRequest({
    variables: {
      email: email
    },
    query: Queries.getUserID,
  });

  return data.data.user[0].id;
}
module.exports = async(req, res, _next) => {
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body });
  const user_id= await getID(req.body.email);
  
  const {data, errors} = await Common.GQLRequest({
    variables: {
      todo: req.body.todo,
      user_id: user_id,
    },
    query: mutations.insertTodo,
  });
   console.log("daygf",data);
  

  return res.status(200).json({ data:data,status: true, message: "Hello World!" });
};
