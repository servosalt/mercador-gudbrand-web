{
  presets: ["next/babel"];
  plugins: [
    ["styled-components", { "ssr": true }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["emotion"]
  ]
}