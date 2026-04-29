import mongoose from "mongoose";
import dotenv from "dotenv";
import { Character } from "./models/Character";
import { Artifact } from "./models/Artifact";

dotenv.config();

async function seed() {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("Połączono z MongoDB");

    await Artifact.deleteMany({});
    await Character.deleteMany({});

    const muminek = await Character.create({
        name: "Muminek",
        description: "Ciekawski i odważny mieszkaniec doliny",
        species: "Muminek",
    });

    const mama = await Character.create({
        name: "Mama Muminka",
        description: "Opiekuńcza i zawsze gotowa pomóc",
        species: "Muminek",
    });

    const tata = await Character.create({
        name: "Tata Muminka",
        description: "Uwielbia przygody i opowieści",
        species: "Muminek",
    });

    const wloczykij = await Character.create({
        name: "Włóczykij",
        description: "Wędrowiec kochający wolność",
        species: "Inne",
    });

    const malaMi = await Character.create({
        name: "Mała Mi",
        description: "Mała, ale bardzo odważna i zadziorna",
        species: "Miukk",
    });

    const paszczak = await Character.create({
        name: "Paszczak",
        description: "Kolekcjoner i archiwista",
        species: "Paszczak",
    });

    const snork = await Character.create({
        name: "Panna Migotka",
        description: "Przyjaciółka Muminka",
        species: "Inne",
    });

    await Character.findByIdAndUpdate(muminek._id, {
        bestFriend: snork._id,
    });

    await Character.findByIdAndUpdate(snork._id, {
        bestFriend: muminek._id,
    });

    await Character.findByIdAndUpdate(wloczykij._id, {
        bestFriend: muminek._id,
    });

    await Artifact.create([
        {
            name: "Kapelusz Czarnoksiężnika",
            description: "Zmienia przedmioty w coś dziwnego",
            owner: muminek._id,
        },
        {
            name: "Harmonijka",
            description: "Magiczny instrument Włóczykija",
            owner: wloczykij._id,
        },
        {
            name: "Torebka Mamy Muminka",
            description: "Zawiera wszystko co potrzebne",
            owner: mama._id,
        },
        {
            name: "Kolekcja znaczków",
            description: "Najcenniejszy zbiór Paszczaka",
            owner: paszczak._id,
        },
        {
            name: "Muszla",
            description: "Znaleziona na plaży",
            owner: muminek._id,
        },
    ]);

    console.log("Seed zakończony");

    process.exit();
}

seed();