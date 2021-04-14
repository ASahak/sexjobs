require('dotenv').config();
const path = require('path');

module.exports = {
    distDir: "dist",
    cssModules: false,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
        ];
        config.resolve.alias = {
            ...config.resolve.alias,
            Components: path.join(__dirname, 'Components'),
            dummyData: path.join(__dirname, 'DummyData'),
            static: path.join(__dirname, 'static'),
            services: path.join(__dirname, 'services'),
            utils: path.join(__dirname, 'utils'),
            hooks: path.join(__dirname, 'Hooks'),
            store: path.join(__dirname, 'store'),
            hoc: path.join(__dirname, 'HOC'),
        }
        return config;
    }
};