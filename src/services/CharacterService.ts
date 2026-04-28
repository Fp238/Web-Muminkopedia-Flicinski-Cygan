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
        if (!character) {
            throw new Error("Character not found");
        }
        return character;
    }

    async createCharacter(data: Partial<ICharacter>) {
        if (!data.name) {
            throw new Error("Name is required");
        }

        if (!data.description) {
            throw new Error("Description is required");
        }

        if (!data.species) {
            throw new Error("Species is required");
        }

        return this.characterRepository.create(data);
    }

    async updateCharacter(id: string, data: Partial<ICharacter>) {
        const character = await this.characterRepository.findById(id);

        if (!character) {
            throw new Error("Character not found");
        }

        return this.characterRepository.update(id, data);
    }

    async deleteCharacter(id: string) {
        const character = await this.characterRepository.findById(id);

        if (!character) {
            throw new Error("Character not found");
        }

        await this.artifactRepository.deleteByOwner(id);

        return this.characterRepository.delete(id);
    }

    async setBestFriend(characterId: string, friendId: string) {
        const character = await this.characterRepository.findById(characterId);
        const friend = await this.characterRepository.findById(friendId);

        if (!character || !friend) {
            throw new Error("Character not found");
        }

        return this.characterRepository.update(characterId, {
            bestFriend: friendId as any,
        });
    }
}