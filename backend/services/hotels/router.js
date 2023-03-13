module.exports = () => [
  {
    "path": "/backend/hotels/(.*)",
    "proxy": {
      "instance": "hotels:3500",
      "path": "/v1.0/invoke/hotels/method/$1"
    }
  }
];
