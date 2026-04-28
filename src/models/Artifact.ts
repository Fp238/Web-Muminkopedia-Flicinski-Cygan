import { Schema, model, Document, Types } from "mongoose";


export interface IArtifact extends Document {
    name: string;
    description: string;
    owner: Types.ObjectId;
}

const ArtifactSchema = new Schema<IArtifact>(
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
        owner: {
            type: Schema.Types.ObjectId,
            ref: "Character",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Artifact = model<IArtifact>("Artifact", ArtifactSchema);