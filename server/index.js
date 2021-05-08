import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import cors from "cors";
const app = express();
app.use(express.json({ limit: "32mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://lolfar:lolfar123@cluster0.2fzps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
