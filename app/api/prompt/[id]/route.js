import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

//get (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');

    if (!prompt) return Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch all prompts', {
      status: 500,
    });
  }
};

// patch (update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id).populate('creator');
    console.log('tu');
    if (!existingPrompt) return Response('Prompt not found', { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    console.log('tam');
    await existingPrompt.save();
    console.log('siam');
    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response('Error updating prompt', {
      status: 500,
    });
  }
};

//delete
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);
    return new Response('Prompt deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to deleted prompt', { status: 500 });
  }
};