import chalk from "chalk";
import { execSync } from "child_process";

console.log(chalk.cyan("Main - Composer"));
execSync("composer install");
console.log(chalk.green("Done"));
console.log(chalk.green(""));

console.log(chalk.cyan("Integration - Gutenberg"));
execSync(
    "npm --prefix ./integrations/Gutenberg/blocks install ./integrations/Gutenberg/blocks",
    "cd ../../.."
);
console.log(chalk.green("Done"));
console.log(chalk.green(""));

console.log(chalk.cyan("Admin - Form Edit"));
execSync(
    "npm --prefix ./assets/admin/form_html install ./assets/admin/form_html",
    "cd ../../.."
);
console.log(chalk.green("Done"));
console.log(chalk.green(""));
