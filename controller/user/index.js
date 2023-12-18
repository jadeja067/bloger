const model = require("../../schema/user");
const userschema = model.Users;

exports.login = async (req, res) => {
  try {
    const user = await userschema.findOne(req.body);
    if(user) res.json(1)
    else res.json(0)
  } catch (e){
    res.status(e);
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const users = await userschema.find();
    res.json(users).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.getOneItem = async (req, res) => {
  const id = req.originalUrl.split('/')[2];
  try {
    const user = await userschema.findOne({username: id});
    res.json(user).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.createItem = async (req, res) => {
  try {
    const user = new userschema(req.body);
    user.save();
    res.json({
      status: "Success",
      message: "Record Successfully Created."
    }).status(200)
  } catch (e) {
    res.json(e);
  }
};

exports.updateItem = async (req, res) => {
  const id = req.originalUrl.split('/')[2];
  try {
    let user = await userschema.findOne({username: id});
    await user.updateOne(req.body);
    res.json({
      status: "Success",
      message: "Record Successfully Updated."
    }).status(200)
  } catch (e) {
    res.json(e);
  }
};

exports.DeleteItem = async (req, res) => {
  const id = req.originalUrl.split('/')[2];
  try {
    const user = await userschema.findOne({username: id});
    await user.deleteOne();
    res.status(200).json({
      status: "Success",
      message: "Record Successfully Deleted."
    });
  } catch (e) {
    res.status(e);
  }
};
