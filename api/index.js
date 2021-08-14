//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const apiUrl = await axios.get("https://restcountries.eu/rest/v2/all");
  let apiInfo = await apiUrl.data.map((el) => {
    return {
      id: el.alpha3Code,
      name: el.name,
      image: el.flag,
      continent: el.region,
      capital: el.capital,
      subregion: el.subregion,
      area: el.area,
      poblacion: el.population,
    };
  });
  await Country.bulkCreate(apiInfo);
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
