import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube-reloaded", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) => console.log("🚫DB Error", error);

db.once("open", handleOpen);
db.on("error", handleError);
