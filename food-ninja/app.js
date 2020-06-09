const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });

const app = vertex.app();

const index = require("./routes/index");
const api = require("./routes/api");

app.use("/", index);
app.use("/api", api);



module.exports = app;
