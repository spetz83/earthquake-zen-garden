export default (req, res) => {
  const data = require("../../../data/siteData.json");
  res.status(200).json(data.data.features);
};
