module.exports = () => [
  {
    "path": "/backend/firstservice/(.*)",
    "proxy": {
      "instance": "firstservice:3500",
      "path": "/v1.0/invoke/firstservice/method/$1"
    }
  }
];
