import mongoose from "mongoose";


const databaseConn = async()=>{
 try {
  const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`);
   console.log(`connected to ${connectionInstance.connection.host}`);

} catch (error) {
    console.log("Database ERR",error);
    process.exit(1);
 }
}


export default databaseConn;