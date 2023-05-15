const express = require('express');
const sequelize = require('../config/connection');
const routes = require('./routes');
const path = require('path'); 

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);