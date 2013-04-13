Package.describe({
  summary: "PayNode - a library for interfacing with various online payment services."
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
});
Npm.depends({
    "paynode":"0.3.6"
});