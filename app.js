require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./route/authRoute");
const authenticate = require("./middleware/authenticate")
const userRouter = require("./route/userRoute")
const adminRouter = require("./route/adminRoute")

const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");

// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/user",authenticate,userRouter)
app.use("/admin",authenticate,adminRouter)


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server running on port: " + port));
