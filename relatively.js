var path = require("path");

require("relatively")({
  customize: function (module, pathname) {
    return (
      pathname.indexOf(__dirname) === 0 &&
      pathname.indexOf("/node_modules/") < 0
    );
  },
  mods: [
    {
      type: "dir",
      from: "app",
      to: path.join(__dirname, "src"),
    }
  ]
});
