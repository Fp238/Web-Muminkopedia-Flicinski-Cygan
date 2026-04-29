import { Router } from "express";
import { CharacterController } from "../controllers/CharacterController";


const router = Router();

router.get("/", CharacterController.getAll);
router.get("/:id", CharacterController.getById);
router.post("/", CharacterController.create);
router.put("/:id", CharacterController.update);
router.delete("/:id", CharacterController.delete);
router.patch("/:id/friend", CharacterController.setBestFriend);

export default router;