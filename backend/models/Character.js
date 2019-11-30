import {Schema, model} from 'mongoose';

const pagerankSchema = new Schema({title: String, rank: Number});

const CharacterSchema = new Schema({
    titles: [String],
    spouse: [String],
    children: [String],
    allegiance: [String],
    books: [String],
    plod: Number,
    longevity: [String],
    plodB: Number,
    plodC: Number,
    longevityB: [String],
    longevityC: [String],
    name: String,
    slug: String,
    gender: String,
    house: String,
    alive: Boolean,
    createdAt: Date,
    updatedAt: Date,
    pagerank: pagerankSchema,
    id: String
});

export default model('Character', CharacterSchema);