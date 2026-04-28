import { Schema, model, Document } from "mongoose";


export interface ICharacter extends Document {
    name: string;
    description: string;
    species: "Muminek" | "Miukk" | "Paszczak" | "Inne";
    isHibernating: boolean;
    bestFriend?: string | null;
}

const CharacterSchema = new Schema<ICharacter>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        species: {
            type: String,
            required: true,
            enum: ["Muminek", "Miukk", "Paszczak", "Inne"],
        },
        isHibernating: {
            type: Boolean,
            default: false,
        },
        bestFriend: {
            type: Schema.Types.ObjectId,
            ref: "Character",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export const Character = model<ICharacter>("Character", CharacterSchema);