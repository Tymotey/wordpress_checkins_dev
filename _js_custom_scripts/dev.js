import chalk from "chalk";
import { exec } from "child_process";

const argumentsDev = process.argv.slice(2); // Exclude the first two elements
let commandToRun = [];
let names = [];
let colors = [];
let title = [chalk.cyan("Running dev:")];

if (argumentsDev.length === 0 || argumentsDev.indexOf("blocks") !== -1) {
    title.push(chalk.magenta("Blocks"));
    names.push("BLOCKS");
    colors.push("bgMagenta.bold");
    commandToRun.push('"cd ./integrations/Gutenberg/blocks && npm run start"');
}
if (argumentsDev.length === 0 || argumentsDev.indexOf("admin") !== -1) {
    if (title.length > 1) title.push(chalk.cyan("&"));
    title.push(chalk.magenta("Admin"));
    names.push("ADMIN");
    colors.push("bgBlue.bold");
    commandToRun.push('"npm -v"');
}

console.log(...title);
const command =
    'concurrently --prefix "{name}" --names "' +
    names.join(",") +
    '" -c "' +
    colors.join(",") +
    '" ' +
    commandToRun.join(" ");

var childProcess = exec(command, ["killOthers=failure"]);
childProcess.stdout.on("data", function (data) {
    console.log(data);
});
