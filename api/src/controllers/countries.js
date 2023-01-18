const { Sequelize, Op } = require("sequelize");
const { Country, Activity } = require("../db");
const axios = require("axios");

module.exports = {
  countryFinder: async (name) => {
    if (!name) {
      const countries = await Country.findAll({
        include: { model: Activity, through: { attributes: [] } },
      });
      return countries;
    } else {
      name = name.toLowerCase();
      const country = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
        include: { model: Activity, through: { attributes: [] } },
      });
      if (country.length === 0) throw new Error("Country Not Found");
      return country;
    }
  },
  dbcontrol: async () => {
    const countries = await Country.findAll();
    if (countries.length === 0) {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      for (let elem of data) {
        let {
          cca3,
          name,
          flags,
          region,
          capital,
          subregion,
          area,
          population,
        } = elem;
        const id = cca3;
        name = name.common;
        const flag_img = flags.png;
        const continent = region;
        if (!capital) capital = ["Not Assigned"];
        if (!subregion) subregion = continent;
        if (typeof capital === "object") capital = capital.toString();
        await Country.create({
          id,
          name,
          flag_img,
          continent,
          capital,
          subregion,
          area,
          population,
        });
      }
    }
  },
};
