const sortingModel = require("../models/sorting");
const form = require("../helpers/form");

module.exports = {
  sortingProduct: (req, res) => {
    const { keyword } = req.query;
    // const limit = Number(query.limit) || 3;
    // const page = Number(query.page) || 1;
    // const offset = (page - 1) * limit || 0;
    sortingModel
      .sortingProduct(keyword)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
