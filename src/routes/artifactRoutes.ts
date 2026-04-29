import { Router } from "express";
import { ArtifactController } from "../controllers/ArtifactController";


const router = Router();

router.get("/", ArtifactController.getAll);
router.get("/:id", ArtifactController.getById);
router.post("/", ArtifactController.create);
router.put("/:id", ArtifactController.update);
router.delete("/:id", ArtifactController.delete);

router.get("/owner/:ownerId", ArtifactController.getByOwner);

export default router;