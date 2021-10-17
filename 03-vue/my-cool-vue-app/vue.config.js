const MY_COOL_NAME = process.env.MY_COOL_NAME;
console.log("MY_COOL_NAME", MY_COOL_NAME);
module.exports = {
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const base = args[0]["process.env"];
      args[0]["process.env"] = {
        ...base,
        VUE_APP_MY_COOL_NAME: `"${MY_COOL_NAME}"`,
      };

      return args;
    });
  },
};
