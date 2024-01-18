// Necessary libraries imported to build dynamic server foundations
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

/* Connection to database / User session information set up to persist across server restarts/browser closure
by storing data in database rather than memory*/
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Create instance of Handlebars templating engine with custom helpers
const hbs = exphbs.create({ helpers });

// set up express session middleware
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // Uses the SequelizeStore to persist session data as prepared above previously
    store: new SequelizeStore({
        db: sequelize
    })
};
// Integrates session into Express instance, making available for all subsequent routes established
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('NOW LISTENING!!'));
});