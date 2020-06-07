const turbo = require("turbo360")({ site_id: process.env.TURBO_APP_ID });
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();

router.get("/", (req, res) => {
  //index referece to the index.mustache file in view
  //data will be rendered dynamically on the index.mustache file by passing the key from the data greeting

  const data = {
    greeting: "Welcome to Food Ninja"
  };

  res.render("index", data);
});

module.exports = router;
