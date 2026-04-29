import { Request, Response } from "express";
import { CharacterService } from "../services/CharacterService";


const characterService = new CharacterService();

type IdParams = {
    id: string;
};

type FriendBody = {
    przyjaciel_id: string;
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
            const { imie, opis, gatunek, status_snu, przyjaciel_id } = req.body;

            const character = await characterService.createCharacter({
                imie,
                opis,
                gatunek,
                status_snu,
                przyjaciel_id,
            });

            res.status(201).json(character);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req: Request<IdParams>, res: Response) {
        try {
            const { imie, opis, gatunek, status_snu, przyjaciel_id } = req.body;

            const character = await characterService.updateCharacter(req.params.id, {
                imie,
                opis,
                gatunek,
                status_snu,
                przyjaciel_id,
            });

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

    static async setFriend(req: Request<IdParams, {}, FriendBody>, res: Response) {
        try {
            const character = await characterService.setFriend(
                req.params.id,
                req.body.przyjaciel_id
            );

            res.json(character);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}