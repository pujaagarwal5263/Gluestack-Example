const axios = require("axios");

class Common {
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
