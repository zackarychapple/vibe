import { rspack } from "@rspack/core";
import {withZephyr} from "zephyr-rspack-plugin";
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";

const isDev = process.env.NODE_ENV === "development";

const config = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx"
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"]
  },
  module: {
    rules: [
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
      name: 'create',
      exposes: {
        './create': './src/app/create.tsx',
      }
    }),
  ],
  experiments: {
    css: true
  }
};

export default withZephyr()(config);
