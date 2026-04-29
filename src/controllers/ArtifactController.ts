import { Request, Response } from "express";
import { ArtifactService } from "../services/ArtifactService";


const artifactService = new ArtifactService();

type IdParams = {
    id: string;
};

type OwnerParams = {
    ownerId: string;
};

export class ArtifactController {
    static async getAll(req: Request, res: Response) {
        try {
            const artifacts = await artifactService.getAllArtifacts();
            res.json(artifacts);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getById(req: Request<IdParams>, res: Response) {
        try {
            const artifact = await artifactService.getArtifactById(req.params.id);
            res.json(artifact);
        } catch (err: any) {
            res.status(404).json({ message: err.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const artifact = await artifactService.createArtifact(req.body);
            res.status(201).json(artifact);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req: Request<IdParams>, res: Response) {
        try {
            const artifact = await artifactService.updateArtifact(
                req.params.id,
                req.body
            );
            res.json(artifact);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async delete(req: Request<IdParams>, res: Response) {
        try {
            await artifactService.deleteArtifact(req.params.id);
            res.json({ message: "Artifact deleted" });
        } catch (err: any) {
            res.status(404).json({ message: err.message });
        }
    }

    static async getByOwner(req: Request<OwnerParams>, res: Response) {
        try {
            const artifacts = await artifactService.getArtifactsByOwner(
                req.params.ownerId
            );
            res.json(artifacts);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}