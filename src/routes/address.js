const addressRouter = require("express").Router();
const addressController = require("../controllers/address");
const checkToken = require("../helpers/middlewares/checkToken");

addressRouter.get("/", checkToken, addressController.getAddressByUser);
// addressRouter.get("/:id", checkToken, addressController.getAddressById);
addressRouter.post("/", checkToken, addressController.addAddress);
addressRouter.patch("/:id", checkToken, addressController.updateAddress);
addressRouter.delete("/:id", checkToken, addressController.deleteAddress);

module.exports = addressRouter;