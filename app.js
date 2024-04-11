const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const session = require("express-session");

require("./db/conn.js");
const User = require("./models/User.js");

const port = process.env.PORT || 5502;

const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

app.use(express.json());
app.use(
  "/javascript",
  express.static("public/javascript", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/home", (req, res) => {
  res.render("home");
});

app.post("/signup", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmpassword;

    if (password === confirmPassword) {
      const userData = new User({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      const signedUp = await userData.save();
      // res.send("Signup successful!");
      console.log("signup succesfully redirecting to home page");
      res.redirect("/home");
      // res.status(201).render(index);

      // Perform signup logic here
    } else {
      res.send("Passwords do not match.");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs");
});

app.get("/chart", (req, res) => {
  res.render("chart");
});

app.get("/DailyUpdates", (req, res) => {
  res.render("DailyUpdates");
});

app.get("/Events", (req, res) => {
  res.render("Events");
});

app.get("/Ngo", (req, res) => {
  res.render("Ngo");
});

app.get("/calender", (req, res) => {
  res.render("calender");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;

//         // Perform login logic here
//         res.send("Login successful!");
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user_email = await User.findOne({ email: email });
    if (user_email.password === password) {
      // res.send("login successful")
      console.log("signup succesfully redirecting to home page");
      res.redirect("/home");
      //  res.redirect("/home.html");
      // res.status(201).render("dashboard")
    } else {
      res.send("password is not matching with database");
    }
  } catch (err) {
    res.status(400).send("invalid email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
