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

        config.resolve.alias['Components'] = path.join(__dirname, 'Components');
        config.resolve.alias['static'] = path.join(__dirname, 'static');
        config.resolve.alias['utils'] = path.join(__dirname, 'utils');
        config.resolve.alias['hooks'] = path.join(__dirname, 'Hooks');
        config.resolve.alias['store'] = path.join(__dirname, 'store');
        config.resolve.alias['hoc'] = path.join(__dirname, 'HOC');
        return config;
    }
};