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
        imie: "Muminek",
        opis: "Ciekawski i odważny mieszkaniec doliny",
        gatunek: "Muminek",
        status_snu: false,
    });

    const mama = await Character.create({
        imie: "Mama Muminka",
        opis: "Opiekuńcza i spokojna",
        gatunek: "Muminek",
        status_snu: false,
    });

    const tata = await Character.create({
        imie: "Tata Muminka",
        opis: "Opowiada historie i przygody",
        gatunek: "Muminek",
        status_snu: false,
    });

    const wloczykij = await Character.create({
        imie: "Włóczykij",
        opis: "Wędrowiec kochający wolność",
        gatunek: "Inne",
        status_snu: false,
    });

    const malaMi = await Character.create({
        imie: "Mała Mi",
        opis: "Mała ale bardzo odważna",
        gatunek: "Miukk",
        status_snu: false,
    });

    const paszczak = await Character.create({
        imie: "Paszczak",
        opis: "Archiwista i kolekcjoner",
        gatunek: "Paszczak",
        status_snu: false,
    });

    const migotka = await Character.create({
        imie: "Migotka",
        opis: "Przyjaciółka Muminka",
        gatunek: "Inne",
        status_snu: false,
    });

    await Character.findByIdAndUpdate(muminek._id, {
        przyjaciel_id: migotka._id,
    });

    await Character.findByIdAndUpdate(migotka._id, {
        przyjaciel_id: muminek._id,
    });

    await Character.findByIdAndUpdate(wloczykij._id, {
        przyjaciel_id: muminek._id,
    });

    await Artifact.create([
        {
            nazwa: "Kapelusz Czarnoksiężnika",
            opis_wlasciwosci: "Zmienia rzeczy w coś dziwnego",
            wlasciciel_id: muminek._id,
        },
        {
            nazwa: "Harmonijka",
            opis_wlasciwosci: "Magiczny instrument",
            wlasciciel_id: wloczykij._id,
        },
        {
            nazwa: "Torebka Mamy Muminka",
            opis_wlasciwosci: "Zawiera wszystko co potrzebne",
            wlasciciel_id: mama._id,
        },
        {
            nazwa: "Kolekcja znaczków",
            opis_wlasciwosci: "Najcenniejszy zbiór Paszczaka",
            wlasciciel_id: paszczak._id,
        },
        {
            nazwa: "Muszla",
            opis_wlasciwosci: "Znaleziona na plaży",
            wlasciciel_id: muminek._id,
        },
    ]);

    console.log("Seed zakończony");

    process.exit();
}

seed();