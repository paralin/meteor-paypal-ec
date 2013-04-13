Package.describe({
  summary: "PayPal express checkout packaged for Meteor."
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
});
Npm.depends({
    "paypal-ec":"0.2.6"
});