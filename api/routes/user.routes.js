import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });
// best practice

router.get("/test", test);
router.post('/update/:id', verifyToken, updateUser)
export default router;
