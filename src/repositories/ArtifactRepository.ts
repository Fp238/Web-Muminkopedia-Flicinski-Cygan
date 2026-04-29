import { Artifact, IArtifact } from "../models/Artifact";


export class ArtifactRepository {
    async findAll(): Promise<IArtifact[]> {
        return Artifact.find().populate("wlasciciel_id");
    }

    async findById(id: string): Promise<IArtifact | null> {
        return Artifact.findById(id).populate("wlasciciel_id");
    }

    async create(data: Partial<IArtifact>): Promise<IArtifact> {
        return Artifact.create(data);
    }

    async update(id: string, data: Partial<IArtifact>) {
        return Artifact.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return Artifact.findByIdAndDelete(id);
    }

    async findByOwner(ownerId: string) {
        return Artifact.find({ wlasciciel_id: ownerId }).populate("wlasciciel_id");
    }

    async clearOwner(ownerId: string) {
        return Artifact.updateMany(
            { wlasciciel_id: ownerId },
            { wlasciciel_id: null }
        );
    }
}