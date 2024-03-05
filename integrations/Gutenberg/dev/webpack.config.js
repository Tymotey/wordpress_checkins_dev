module.exports = {
    entry: "./blocks_dev.js",
    output: {
        path: __dirname,
        filename: "../blocks.js",
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
