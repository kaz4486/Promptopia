import mongoose, { Schema, models, model } from 'mongoose';

const PromtSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromtSchema);

module.exports = Prompt;
