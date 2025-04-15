import {rspack} from "@rspack/core";
import {withZephyr} from "zephyr-rspack-plugin";
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";
import * as path from "node:path";

const isDev = process.env.NODE_ENV === "development";

const config = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx"
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js")
              }
            }
          }
        ],
        type: "css"
      },
      {
        test: /\.svg$/,
        type: "asset"
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: {
                targets: [
                  "chrome >= 87",
                  "edge >= 88",
                  "firefox >= 78",
                  "safari >= 14"
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: "./src/index.html"
    }),
    new ModuleFederationPlugin({
      dts: false,
      filename: 'remoteEntry.js',
      name: 'feed',
      exposes: {
        './feed': './src/components/feed.tsx',
      },
      shared: {
        react: {singleton: true, requiredVersion: false, eager: true},
        'react-dom': {singleton: true, requiredVersion: false, eager: true},
        '@tanstack/react-query': {singleton: true, requiredVersion: false, eager: true},
        '@tanstack/react-router': {singleton: true, requiredVersion: false, eager: true}
      }
    }),
  ],
  experiments: {
    css: true
  }
};

export default withZephyr()(config);
