const Common = require("../../common")
const Mutations = require("../../graphql/mutations")

module.exports = async(req, res, _next) => {
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body });
  const {email} = req.body;
  
  const { data, errors } = await Common.GQLRequest({
    variables: {
      email: email
    },
    query: Mutations.removeUser,
  });


  return res.status(200).json({ data:data, status: true, message: "User removed successfully" });
};
