import chalk from "chalk";
import { execSync } from "child_process";

console.log(chalk.cyan("Composer install"));
execSync("composer install");
console.log(chalk.green("Done"));
console.log(chalk.green(""));

console.log(chalk.cyan("Installing - Integration - Gutenberg"));
execSync(
    "npm --prefix ./integrations/Gutenberg/blocks install ./integrations/Gutenberg/blocks",
    "cd ../../.."
);
console.log(chalk.green("Done"));
console.log(chalk.green(""));
