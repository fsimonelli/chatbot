import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      )
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }],
    })

    return NextResponse.json({
      reply: response.choices[0]?.message?.content || 'No response',
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error communicating with OpenAI' },
      { status: 500 },
    )
  }
}
