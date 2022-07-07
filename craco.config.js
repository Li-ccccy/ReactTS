// craco.config.js
module.exports = {
  style: {
    entry: ["react-hot-loader/patch", "./src"],
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
