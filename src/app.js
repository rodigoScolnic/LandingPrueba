const express = require('express');
const app = express();
const methodOverride = require ('method-override');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('../public'));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('public'));

const leadRouter = require('./routes/leadRouter');
app.use('/' , leadRouter);
app.use('/ok' , leadRouter)

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

app.listen(3001 , () => console.log('THE SERVER IS RUNNING'));