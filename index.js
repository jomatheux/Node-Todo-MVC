const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
const conn = require('./db/conn');
// importando Model Task
const Task = require(`./models/Task`);

const tasksRoutes = require('./routes/tasksRoutes');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({extended: true})
)


app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => {console.error(err)});

