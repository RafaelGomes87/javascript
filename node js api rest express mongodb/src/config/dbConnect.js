import mongoose, {mongo} from "mongoose";

async function conectaNaDatabase(){
   mongoose.connect(process.env.DB_CONNECTION_STRING); 
<<<<<<< HEAD
=======


>>>>>>> dfd5d686414df902ce2d2969295a04b830c9419b
   return mongoose.connection;

};


export default conectaNaDatabase;




