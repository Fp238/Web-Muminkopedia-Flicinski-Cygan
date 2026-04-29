import mongoose, { Schema, Document, Types } from "mongoose";


export interface IArtifact extends Document {
    nazwa: string;
    opis_wlasciwosci: string;
    wlasciciel_id: Types.ObjectId | null;
}

const ArtifactSchema = new Schema<IArtifact>({
    nazwa: {
        type: String,
        required: true,
    },
    opis_wlasciwosci: {
        type: String,
        required: true,
    },
    wlasciciel_id: {
        type: Schema.Types.ObjectId,
        ref: "Character",
        required: true,
    },
});

export const Artifact = mongoose.model<IArtifact>(
    "Artifact",
    ArtifactSchema
);