const axios = require("axios");
class Common {
  verifyJwt(token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.HASURA_GRAPHQL_JWT_SECRET || ""
      );

      return decoded;
    } catch (err) {
      throw err;
    }
  }

  Response(res, success, message, data) {
    res.json({ success, message, data });
  }

  async GQLRequest({ variables, query }) {
    const headers = {
      "content-type": "application/json",
      "x-hasura-admin-secret": "admin-secret",
    };

    return await axios({
      url: "http://graphql:8080/v1/graphql",
      method: "POST",
      headers: headers,
      data: {
        query,
        variables,
      },
    });
  }

}

module.exports = new Common();
