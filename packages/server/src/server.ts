import express,{Application} from 'express';
import sequelize from './sequelize';
import routes from './routes';
import session from 'express-session';
import cors from 'cors';
import socket from './socket';

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
app.use(cors({
    origin: 'http://localhost:3000',
    methods : ['GET','POST','PUT','DELETE'],
    credentials: true
}));
app.use(express.urlencoded({extended:true}));

sequelize.sync({force:true});

app.use('/',routes);


const server = app.listen(8000, ()=>{
    console.log('start');
});

socket(server,app,sessionMiddleWare);