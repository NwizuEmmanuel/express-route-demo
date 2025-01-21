import express from "express";
import todoRoutes from "./routes/todos.js";

const app = express();
const PORT = process.env.PORT || 6000;

app.use("/todos", todoRoutes);

app.listen(PORT, ()=>{
    console.log("Server is listening on port", PORT);
});