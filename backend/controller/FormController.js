const formModel = require("../model/UserForm");

exports.formSubmit = async (req, res, next) => {
  try {
    const newData = await formModel.create(req.body);

    if (newData) {
      res.status(200).json({
        status: "success",
        message: "perfect",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getData = async (req, res, next) => {
  try {
    const getData = await formModel.find();
    console.log(getData);
    if (getData) {
      res.status(200).json({
        status: "success",
        data: getData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
