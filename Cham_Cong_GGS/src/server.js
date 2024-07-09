require("dotenv").config();
import  express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cors, { CorsOptions } from 'cors'        

let app = express();

const corsOptions = {
   origin:[ "https://cuoihoidangkhoa.com.vn/chamcong/"], 
 };
 
 app.use(cors(corsOptions))
//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);


let port = process.env.PORT || 3000;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});
