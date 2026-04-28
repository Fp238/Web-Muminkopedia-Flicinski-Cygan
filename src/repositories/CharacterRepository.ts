import { Character, ICharacter } from "../models/Character";
import { Types } from "mongoose";


export class CharacterRepository {
    async findAll(): Promise<ICharacter[]> {
        return Character.find();
    }

    async findById(id: string): Promise<ICharacter | null> {
        return Character.findById(id);
    }

    async create(data: Partial<ICharacter>): Promise<ICharacter> {
        return Character.create(data);
    }

    async update(id: string, data: Partial<ICharacter>): Promise<ICharacter | null> {
        return Character.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<ICharacter | null> {
        return Character.findByIdAndDelete(id);
    }

    async findByName(name: string): Promise<ICharacter | null> {
        return Character.findOne({ name });
    }
}