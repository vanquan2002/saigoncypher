import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/Mongoose.js";
import productRoute from "./Routes/ProductRouter.js";
import { errorHandler, notFound } from "./MiddleWare/Errors.js";
import userRoute from "./Routes/UserRouter.js";
import orderRoute from "./Routes/OrderRouter.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

// app.use(notFound);
// app.use(errorHandler);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`server run in port ${PORT}!`));
