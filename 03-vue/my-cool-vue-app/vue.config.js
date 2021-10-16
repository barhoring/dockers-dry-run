const MY_COOL_COLOR = process.env.MY_COOL_COLOR;
console.log("MY_COOL_COLOR", MY_COOL_COLOR);
module.exports = {
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const base = args[0]["process.env"];
      args[0]["process.env"] = {
        ...base,
        VUE_APP_BACKGROUND_COLOR: MY_COOL_COLOR,
      };

      return args;
    });
  },
};
