import { PORT } from "./constants.js";
import { app } from "./app.js";
import route from "./route.js";
import { success, error } from "./utils/logger.js";

app.use("/api/v1", route);

const server = app.listen(PORT, () => {
  success(`Server is running on port: http://localhost:${PORT}`);
});

server.on("error", (err) => {
  error(`Server failed to start: ${err}`);
  process.exit(1);
});
