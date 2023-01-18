const { Country, Activity } = require("../db");

module.exports = {
  createActivity: async (name, difficulty, duration, season, countryIds) => {
    const checkActivity = await Activity.findAll({
      where: {
        name,
        difficulty,
        duration,
        season,
      },
    });
    if (checkActivity.length === 0) {
      try {
        const newActivity = await Activity.create({
          name,
          difficulty,
          duration,
          season,
        });
        for (let code of countryIds) {
          const country = await Country.findByPk(code);
          await country.addActivity(newActivity);
        }
        return newActivity;
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      throw new Error("Activity already exists");
    }
  },
};
