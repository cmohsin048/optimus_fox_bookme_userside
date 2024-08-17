const Company = require("../Modal/Company");
const getallcompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getallcompanies,
};
