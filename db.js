import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.DATABASE, {
      dbName: "smartshopping",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    })
    .then(() => console.log("database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
