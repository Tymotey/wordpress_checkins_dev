import chalk from "chalk";
import fs from "fs-extra";

const currentDir = process.cwd() + "/";

// Copy files to folder for Live
console.log(chalk.cyan("Deleting Nodes"));
const deleteDirectories = [
    "assets/admin/form_html/node_modules",
    "integrations/Gutenberg/blocks/node_modules",
    "node_modules",
];
try {
    // Cleanup
    deleteDirectories.forEach((val) => {
        fs.remove(currentDir + val);
    });
} catch (err) {
    console.error(err);
}
console.log(chalk.green("Done"));
console.log(chalk.green(""));
