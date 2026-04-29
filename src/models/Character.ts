import mongoose, { Schema, Document, Types } from "mongoose";


export interface ICharacter extends Document {
    imie: string;
    opis: string;
    gatunek: string;
    status_snu: boolean;
    przyjaciel_id?: Types.ObjectId | null;
}

const CharacterSchema = new Schema<ICharacter>({
    imie: {
        type: String,
        required: true,
    },
    opis: {
        type: String,
        required: true,
    },
    gatunek: {
        type: String,
        required: true,
    },
    status_snu: {
        type: Boolean,
        required: true,
    },
    przyjaciel_id: {
        type: Schema.Types.ObjectId,
        ref: "Character",
        default: null,
    },
});

export const Character = mongoose.model<ICharacter>(
    "Character",
    CharacterSchema
);