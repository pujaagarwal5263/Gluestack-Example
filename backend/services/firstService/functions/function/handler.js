

module.exports = async(req, res) => {
  const { headers, body }  = req;

  //this is to get all users

  console.log({ headers, body });

  return res.status(200).json({
    status: true,
    message: 'Ok'
  });
};
