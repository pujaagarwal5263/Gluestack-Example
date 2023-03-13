const Common = require("../../common")
const Queries = require("../../graphql/queries")

module.exports = async(req, res, _next) => {
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body });
  const { data, errors } = await Common.GQLRequest({
    variables: {},
    query: Queries.Users,
  });
  console.log(res);
  return res.status(200).json({ data:data, status: true, message: "Hello World!" });
};
