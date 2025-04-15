import { rspack } from "@rspack/core";
import { withZephyr } from "zephyr-rspack-plugin";
import * as path from "node:path";
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";

const isDev = process.env.NODE_ENV === "development";

const config = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx"
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
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
      name: 'create',
      remotes: {
        'grok': 'grok@http://localhost:3011/remoteEntry.js',
        'create': 'create@http://localhost:3012/remoteEntry.js',
        'feed': 'feed@http://localhost:3012/remoteEntry.js'
      },
    }),
  ],
  experiments: {
    css: true
  }
};

export default withZephyr()(config);
