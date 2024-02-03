import mongoose from "mongoose";

export default function dbconnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect("mongodb://127.0.0.1:27017/Nextjs")
    .then((e) => {
      console.log("DataBase is Working");
    })
    .catch((e) => {
      console.log(e);
    });
}
