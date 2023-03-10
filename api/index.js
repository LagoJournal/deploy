//                                                      ___
//                                                   ,o88888
//                                                ,o8888888'
//                          ,:o:o:oooo.        ,8O88Pd8888"
//                      ,.::.::o:ooooOoOoO. ,oO8O8Pd888'"
//                    ,.:.::o:ooOoOoOO8O8OOo.8OOPd8O8O"
//                   , ..:.::o:ooOoOOOO8OOOOo.FdO8O8"
//                  , ..:.::o:ooOoOO8O888O8O,COCOO"
//                 , . ..:.::o:ooOoOOOO8OOOOCOCO"
//                  . ..:.::o:ooOoOoOO8O8OCCCC"o
//                     . ..:.::o:ooooOoCoCCC"o:o
//                     . ..:.::o:o:,cooooCo"oo:o:
//                  `   . . ..:.:cocoooo"'o:o:::'
//                  .`   . ..::ccccoc"'o:o:o:::'
//                 :.:.    ,c:cccc"':.:.:.:.:.'
//               ..:.:"'`::::c:"'..:.:.:.:.:.'
//             ...:.'.:.::::"'    . . . . .'
//            .. . ....:."' `   .  . . ''
//          . . . ...."'
//          .. . ."'
//         .

// ------------------------------------------------

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at ", process.env.PORT); // eslint-disable-line no-console
  });
});
