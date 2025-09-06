import chalk from "chalk";

const error = (msg: string | object) =>
  console.log(
    chalk.bold.bgHex("#FF0000")(" ERROR "),
    chalk.bold.redBright(` ${msg} `)
  );

const warning = (msg: string | object) =>
  console.log(
    chalk.bold.bgHex("#FFA600")(" WARNING "),
    chalk.bold.hex("#FFA600")(` ${msg} `)
  );

const success = (msg: string | object) =>
  console.log(
    chalk.bold.bgHex("#00FF2D")(" SUCCESS "),
    chalk.bold.greenBright(` ${msg} `)
  );

export { error, warning, success };
