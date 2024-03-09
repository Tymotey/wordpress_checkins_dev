import chalk from "chalk";
import fs from "fs-extra";
import archiver from "archiver";

const currentDir = process.cwd() + "/";
const destinationDir = "btdev_inscriere_live";
const destinationDirWithPath = currentDir + "../" + destinationDir + "/";

// Copy files to folder for Live
console.log(chalk.cyan("Copying"));
const copyDirectly = [
    "assets/index.php",
    "assets/script.js",
    "assets/style.css",
    "assets/admin/index.php",
    "assets/admin/script.js",
    "assets/admin/style.css",
    "assets/admin/form_html/build",
    "integrations/Elementor",
    "integrations/Gutenberg/blocks/build",
    "integrations/Gutenberg/Gutenberg.php",
    "integrations/Gutenberg/index.php",
    "integrations/index.php",
    "languages",
    "libs",
    "vendor",
    "btdev_inscriere.php",
    "index.php",
    "LICENSE",
    "readme.txt",
];
const overwriteCustom = [
    {
        from: "",
        to: "",
        name: "LICENSE",
    },
    {
        from: "",
        to: "",
        name: "README.md",
    },
    // {
    //     from: "asd/",
    //     to: "asd/",
    //     name: "LICENSEA",
    // },
];
try {
    process.chdir("../");
    // Cleanup
    fs.remove(destinationDir);
    fs.remove("_btdev_inscriere.zip");
    // Ensure folder exists
    fs.ensureDir(destinationDir);
    process.chdir(currentDir);

    // copy whole folders
    copyDirectly.forEach((val) => {
        fs.copySync(currentDir + val, destinationDirWithPath + val, {
            overwrite: true,
        });
    });

    // Overwrite custom files
    overwriteCustom.forEach((val) => {
        fs.ensureDir(destinationDirWithPath + val.to);
        fs.copySync(
            currentDir + "_to_live/" + val.from + val.name,
            destinationDirWithPath + val.to + val.name,
            {
                overwrite: true,
            }
        );
    });

    // https://www.npmjs.com/package/replace-in-file
} catch (err) {
    console.error(err);
}
console.log(chalk.green("Done"));
console.log(chalk.green(""));

// Make ZIP file
console.log(chalk.cyan("Packing"));
try {
    var output = fs.createWriteStream(currentDir + "../_btdev_inscriere.zip");
    var archive = archiver("zip", {
        zlib: { level: 9 },
    });
    output.on("close", function () {
        console.log(archive.pointer() + " total bytes");
        console.log(
            "archiver has been finalized and the output file descriptor has closed."
        );
    });
    archive.on("error", function (err) {
        throw err;
    });
    archive.on("warning", function (err) {
        if (err.code === "ENOENT") {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });
    archive.pipe(output);
    archive.directory(destinationDirWithPath, false);
    archive.finalize();
} catch (err) {
    console.error(err);
}

console.log(chalk.green("Done"));
console.log(chalk.green(""));
