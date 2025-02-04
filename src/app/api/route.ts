import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const messageHistory: Array<{ role: string; content: string; name?: string }> =
  [
    {
      role: 'system',
      content:
        'You are a helpful assistant. You should answer with concise answers, and avoid using Markdown.',
    },
  ]

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      )
    }

    messageHistory.push({ role: 'user', content: message })

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messageHistory,
    })

    const res = NextResponse.json({
      reply: response.choices[0]?.message?.content || 'No response',
    })

    messageHistory.push({
      role: 'assistant',
      content: response.choices[0]?.message?.content || 'No response',
    })

    return res
  } catch (error) {
    return NextResponse.json(
      { error: 'Error communicating with OpenAI' },
      { status: 500 },
    )
  }
}
