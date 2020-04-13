// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // route to get all the items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // route to get all the users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/landing");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.User.findAll({
        where: req.user.id
      }).then(function(data) {
        res.json({
          email: data[0].dataValues.email,
          id: data[0].dataValues.id,
          name: data[0].dataValues.name
        });
      });
    }
  });

  app.get("/api/items_data", function(req, res) {

    //console.log(req.user.id);
      db.Item.findAll({
        where: {
          UserId: req.user.id
        }  
      }).then(function(data) {
        res.json(data);
      });  
  });

  app.post("/api/newItem", function(req, res) {

    console.log(req.body);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let imgFile = req.files.imgFile;
    let imageName = imgFile.name;
    
    // Use the mv() method to place the file somewhere on your server
    console.log(req.body.currentUserId);

    imgFile.mv(__dirname + '/../public/assets/db_images/' + imageName, function(err) {
      if (err)
        return res.status(500).send(err);
      //res.send('File uploaded!');
    });

    db.Item.create({
      title: req.body.title,
      itemDescription: req.body.description,
      itemCategory: req.body.category,
      imgName: imageName,
      UserId: req.body.currentUserId
    })
      .then(function(data) {
        console.log(data);
        res.redirect("/dashboard");
      })
      .catch(function(err) {
        console.log(err)
        res.status(401).json(err);
      });
   
   // res.send("Data saved");
  });

};
