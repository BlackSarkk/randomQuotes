import { PORT } from "./constants.js";
import { app } from "./app.js";
import route from "./route.js"


app.use("/api/v1/quote", route);




const server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

server.on("error", (err)=> {
  console.error(`Server failed to start:${err}`);
  process.exit(1)
})