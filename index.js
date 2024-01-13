const express = require('express');
const app = express();
require("./config/config.js");
const productsRoutes = require('./routes/routes.js');
const PORT = 3005;
app.use(express.json());


app.use('/', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
