const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://manasviarora28:en3I13JX3b9wD97v@cluster0.pqck5nb.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
