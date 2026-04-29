import { Request, Response } from "express";
import { CharacterService } from "../services/CharacterService";


const characterService = new CharacterService();

type IdParams = {
    id: string;
};

export class CharacterController {
    static async getAll(req: Request, res: Response) {
        try {
            const characters = await characterService.getAllCharacters();
            res.json(characters);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getById(req: Request<IdParams>, res: Response) {
        try {
            const character = await characterService.getCharacterById(req.params.id);
            res.json(character);
        } catch (err: any) {
            res.status(404).json({ message: err.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const character = await characterService.createCharacter(req.body);
            res.status(201).json(character);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req: Request<IdParams>, res: Response) {
        try {
            const character = await characterService.updateCharacter(
                req.params.id,
                req.body
            );
            res.json(character);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async delete(req: Request<IdParams>, res: Response) {
        try {
            await characterService.deleteCharacter(req.params.id);
            res.json({ message: "Character deleted" });
        } catch (err: any) {
            res.status(404).json({ message: err.message });
        }
    }

    static async setBestFriend(req: Request<IdParams>, res: Response) {
        try {
            const { friendId } = req.body;

            const character = await characterService.setBestFriend(
                req.params.id,
                friendId
            );

            res.json(character);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}