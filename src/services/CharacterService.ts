import { CharacterRepository } from "../repositories/CharacterRepository";
import { ArtifactRepository } from "../repositories/ArtifactRepository";
import { ICharacter } from "../models/Character";


export class CharacterService {
    private characterRepository = new CharacterRepository();
    private artifactRepository = new ArtifactRepository();

    async getAllCharacters() {
        return this.characterRepository.findAll();
    }

    async getCharacterById(id: string) {
        const character = await this.characterRepository.findById(id);
        if (!character) throw new Error("Character not found");
        return character;
    }

    async createCharacter(data: Partial<ICharacter>) {
        if (!data.imie) throw new Error("Imie is required");
        if (!data.opis) throw new Error("Opis is required");
        if (!data.gatunek) throw new Error("Gatunek is required");
        if (data.status_snu === undefined)
            throw new Error("Status_snu is required");

        return this.characterRepository.create(data);
    }

    async updateCharacter(id: string, data: Partial<ICharacter>) {
        const character = await this.characterRepository.findById(id);
        if (!character) throw new Error("Character not found");

        return this.characterRepository.update(id, data);
    }

    async deleteCharacter(id: string) {
        const character = await this.characterRepository.findById(id);
        if (!character) throw new Error("Character not found");

        await this.artifactRepository.clearOwner(id);

        return this.characterRepository.delete(id);
    }

    async setFriend(characterId: string, friendId: string) {
        return this.characterRepository.update(characterId, {
            przyjaciel_id: friendId as any,
        });
    }
}