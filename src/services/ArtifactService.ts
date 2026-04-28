import { ArtifactRepository } from "../repositories/ArtifactRepository";
import { CharacterRepository } from "../repositories/CharacterRepository";
import { IArtifact } from "../models/Artifact";

export class ArtifactService {
    private artifactRepository = new ArtifactRepository();
    private characterRepository = new CharacterRepository();

    async getAllArtifacts() {
        return this.artifactRepository.findAll();
    }

    async getArtifactById(id: string) {
        const artifact = await this.artifactRepository.findById(id);

        if (!artifact) {
            throw new Error("Artifact not found");
        }

        return artifact;
    }

    async createArtifact(data: Partial<IArtifact>) {
        if (!data.name) {
            throw new Error("Name is required");
        }

        if (!data.description) {
            throw new Error("Description is required");
        }

        if (!data.owner) {
            throw new Error("Owner is required");
        }

        const ownerId = data.owner.toString();

        const ownerExists = await this.characterRepository.findById(ownerId);

        if (!ownerExists) {
            throw new Error("Owner (Character) not found");
        }

        return this.artifactRepository.create({
            ...data,
            owner: ownerId as any,
        });
    }

    async updateArtifact(id: string, data: Partial<IArtifact>) {
        const artifact = await this.artifactRepository.findById(id);

        if (!artifact) {
            throw new Error("Artifact not found");
        }

        if (data.owner) {
            const ownerId = data.owner.toString();

            const ownerExists = await this.characterRepository.findById(ownerId);

            if (!ownerExists) {
                throw new Error("Owner (Character) not found");
            }

            data.owner = ownerId as any;
        }

        return this.artifactRepository.update(id, data);
    }

    async deleteArtifact(id: string) {
        const artifact = await this.artifactRepository.findById(id);

        if (!artifact) {
            throw new Error("Artifact not found");
        }

        return this.artifactRepository.delete(id);
    }

    async getArtifactsByOwner(ownerId: string) {
        const owner = await this.characterRepository.findById(ownerId);

        if (!owner) {
            throw new Error("Owner not found");
        }

        return this.artifactRepository.findByOwner(ownerId);
    }
}