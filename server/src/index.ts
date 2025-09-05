import { port } from "./constants.js";
import { app } from "./app.js";
import route from "./route.js"


app.use("/api/v1/users", route);

let PORT = port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
