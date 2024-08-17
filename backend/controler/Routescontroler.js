const Route = require("../Modal/RouteModal");
const fetchRoutes = async (req, res) => {
  try {
    const { fromCity, toCity } = req.body;
    if (!fromCity || !toCity) {
      return res
        .status(400)
        .json({ message: "Both from and to cities are required" });
    }
    const routes = await Route.find({
      fromCity: fromCity,
      toCity: toCity,
    });
    res.status(200).json({ routes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { fetchRoutes };
