const model = require("../../schema/user");
const userschema = model.Users;

exports.getAllItems = async (req, res) => {
  try {
    const users = await userschema.find();
    res.json(users).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.getOneItem = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userschema.findById(id);
    res.json(user).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.createItem = async (req, res) => {
  try {
    console.log(25,req.body);
    const user = new userschema(req.body);
    await user.save();
    res.json(user);
  } catch (e) {
    res.json(e);
  }
};

exports.updateItem = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await userschema.findById(id);
    await user.updateOne(req.body);
    res.json(req.body);
  } catch (e) {
    res.json(e);
  }
};

exports.DeleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userschema.findById(id);
    await user.deleteOne();
    res.status(200).json("Record Deleted.");
  } catch (e) {
    res.status(e);
  }
};
