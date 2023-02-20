const Common = require("../../common")
const Queries = require("../../graphql/queries")

module.exports = async(req, res) => {
  const { headers, body }  = req;

  const { data, errors } = await Common.GQLRequest({
    variables: {},
    query: Queries.Users,
  });

  console.log({ headers, body });

  return res.status(200).json({
    data:data,
    status: true,
    message: 'Ok'
  });
};
