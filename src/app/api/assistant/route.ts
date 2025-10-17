import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
  if (!apiKey) return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
  const { query } = await req.json();
  if (!query) return NextResponse.json({ error: 'Missing query' }, { status: 400 });

  const openai = new OpenAI({ apiKey });
  const system = `You are a calm, factual assistant for a pediatric brain tumor nonprofit. Be supportive but concise. Avoid medical diagnosis; point families to credible resources.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: query }
    ],
    temperature: 0.2,
  });

  const answer = completion.choices[0]?.message?.content || '';
  return NextResponse.json({ answer });
}
