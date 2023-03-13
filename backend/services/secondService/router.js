module.exports = () => [
  {
    "path": "/backend/secondservice/(.*)",
    "proxy": {
      "instance": "secondservice:3500",
      "path": "/v1.0/invoke/secondservice/method/$1"
    }
  }
];
