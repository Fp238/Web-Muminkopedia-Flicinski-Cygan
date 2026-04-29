import { Character, ICharacter } from "../models/Character";


export class CharacterRepository {
    async findAll(): Promise<ICharacter[]> {
        return Character.find().populate("przyjaciel_id");
    }

    async findById(id: string): Promise<ICharacter | null> {
        return Character.findById(id).populate("przyjaciel_id");
    }

    async create(data: Partial<ICharacter>): Promise<ICharacter> {
        return Character.create(data);
    }

    async update(id: string, data: Partial<ICharacter>) {
        return Character.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return Character.findByIdAndDelete(id);
    }
}