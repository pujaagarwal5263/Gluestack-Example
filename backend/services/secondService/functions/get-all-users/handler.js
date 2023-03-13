const query = require("../../graphql/query")
const Common = require("../../common")

module.exports = async(req, res, _next) => {
  // do something with the headers & body
  const { data, errors } = await Common.GQLRequest({
    variables: {},
    query: query.getUsers,
  });

  return res.status(200).json({ data: data, status: true, message: "Hello World!" });
};
