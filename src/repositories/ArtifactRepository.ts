import { Artifact, IArtifact } from "../models/Artifact";


export class ArtifactRepository {
    async findAll(): Promise<IArtifact[]> {
        return Artifact.find().populate("owner");
    }

    async findById(id: string): Promise<IArtifact | null> {
        return Artifact.findById(id).populate("owner");
    }

    async create(data: Partial<IArtifact>): Promise<IArtifact> {
        return Artifact.create(data);
    }

    async update(id: string, data: Partial<IArtifact>): Promise<IArtifact | null> {
        return Artifact.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<IArtifact | null> {
        return Artifact.findByIdAndDelete(id);
    }

    async findByOwner(ownerId: string): Promise<IArtifact[]> {
        return Artifact.find({ owner: ownerId });
    }

    async deleteByOwner(ownerId: string): Promise<void> {
        await Artifact.deleteMany({ owner: ownerId });
    }
}