import { express } from "./app.js";
import { quoteHandler } from "./quoteController.js";

const router = express.Router();

router.get("/quotes", quoteHandler);

export default router;
