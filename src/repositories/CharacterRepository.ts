import { Character, ICharacter } from "../models/Character";


export class CharacterRepository {
    async findAll(): Promise<ICharacter[]> {
        return Character.find().populate("bestFriend");
    }

    async findById(id: string): Promise<ICharacter | null> {
        return Character.findById(id).populate("bestFriend");
    }

    async findWithRelations(id: string): Promise<ICharacter | null> {
        return Character.findById(id).populate("bestFriend");
    }

    async create(data: Partial<ICharacter>): Promise<ICharacter> {
        return Character.create(data);
    }

    async update(id: string, data: Partial<ICharacter>): Promise<ICharacter | null> {
        return Character.findByIdAndUpdate(id, data, { new: true }).populate("bestFriend");
    }

    async delete(id: string): Promise<ICharacter | null> {
        return Character.findByIdAndDelete(id);
    }

    async findByName(name: string): Promise<ICharacter | null> {
        return Character.findOne({ name });
    }
}