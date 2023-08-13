import express,{Application} from 'express';
import sequelize from './sequelize';
import routes from './routes';
import session from 'express-session';

const FileStore = require('session-file-store')(session);

const app: Application = express();

const sessionMiddleWare = session({
    secret:'cacaonibs',
    saveUninitialized: true,
    cookie:{secure:false},
    resave:false,
    store:new FileStore(),
})

app.use(sessionMiddleWare);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

sequelize.sync({force:true});

app.use('/',routes);


app.listen(8000, ()=>{
    console.log('start');
})