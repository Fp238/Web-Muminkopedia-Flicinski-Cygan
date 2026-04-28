import { Artifact, IArtifact } from "../models/Artifact";
import { Types } from "mongoose";


export class ArtifactRepository {
    async findAll(): Promise<IArtifact[]> {
        return Artifact.find().populate("owner");
    }

    async findById(id: string): Promise<IArtifact | null> {
        return Artifact.findById(id).populate("owner");
    }

    async create(data: Partial<IArtifact>): Promise<IArtifact> {
        return Artifact.create({
            ...data,
            owner: new Types.ObjectId(data.owner),
        });
    }

    async update(id: string, data: Partial<IArtifact>): Promise<IArtifact | null> {
        return Artifact.findByIdAndUpdate(
            id,
            {
                ...data,
                ...(data.owner && { owner: new Types.ObjectId(data.owner) }),
            },
            { new: true }
        ).populate("owner");
    }

    async delete(id: string): Promise<IArtifact | null> {
        return Artifact.findByIdAndDelete(id);
    }

    async findByOwner(ownerId: string): Promise<IArtifact[]> {
        return Artifact.find({ owner: ownerId }).populate("owner");
    }

    async deleteByOwner(ownerId: string): Promise<void> {
        await Artifact.deleteMany({ owner: ownerId });
    }
}