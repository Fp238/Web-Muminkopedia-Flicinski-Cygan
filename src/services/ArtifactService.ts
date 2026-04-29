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
        if (!artifact) throw new Error("Artifact not found");
        return artifact;
    }

    async createArtifact(data: Partial<IArtifact>) {
        if (!data.nazwa) throw new Error("Nazwa is required");
        if (!data.opis_wlasciwosci)
            throw new Error("Opis_wlasciwosci is required");
        if (!data.wlasciciel_id)
            throw new Error("Wlasciciel_id is required");

        const owner = await this.characterRepository.findById(
            data.wlasciciel_id.toString()
        );

        if (!owner) throw new Error("Owner not found");

        return this.artifactRepository.create(data);
    }

    async updateArtifact(id: string, data: Partial<IArtifact>) {
        return this.artifactRepository.update(id, data);
    }

    async deleteArtifact(id: string) {
        return this.artifactRepository.delete(id);
    }

    async getArtifactsByOwner(ownerId: string) {
        return this.artifactRepository.findByOwner(ownerId);
    }
}