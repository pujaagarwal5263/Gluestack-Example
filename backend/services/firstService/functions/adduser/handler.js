const Common = require("../../common")
const Mutations = require("../../graphql/mutations")

module.exports = async(req, res, _next) => {
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body });
  const {name, email} = req.body;
  
  const { data, errors } = await Common.GQLRequest({
    variables: {
      name: name,
      email: email,
    },
    query: Mutations.insertUser,
  });

  return res.status(200).json({ data,data,status: true, message: "User created successfully!" });
};
