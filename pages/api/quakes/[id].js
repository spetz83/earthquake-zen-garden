export default (req, res) => {
  const data = require("../../../data/siteData.json");
  const { id } = req.query;
  const quake = data.data.features.find((quake) => quake.id === id);
  res.status(200).json(quake);
};
