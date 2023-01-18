const { Router } = require("express");
const activities = require("../controllers/activities");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryIds } = req.body;
    const newActivity = await activities.createActivity(
      name,
      difficulty,
      duration,
      season,
      countryIds
    );
    return res.status(200).send(newActivity);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;
