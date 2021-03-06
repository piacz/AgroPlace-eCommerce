const { Product } = require("../../db.js");

module.exports = async (req, res, next) => {
  var code = req.params.id;
  var product = await Product.findOne({
    where: {
      id: code,
    },
  });
  /* await Product.destroy({
		where:{
			id: code
		}
	}) */
  if (product) {
    await product.destroy();
    return res.json({ suceffullyDelete: "product has been deleted" });
  } else {
    return res.json({ error: "that product cannot be find" }).status(400);
  }
};
