import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.DATABASE, { connectTimeoutMS: 30000 })
    .then(() => console.log("database connection is successfull"))
    .catch((error) => console.log(error.message));
};

export default connectToDB;
