import {StreamingTextResponse, CohereStream} from 'ai'

export const runtime = 'edge'

export async function POST(req) {
    const {prompt} = await req.json();

    const body = JSON.stringify({
        prompt,
        model: 'command-nightly',
        max_tokens: 300,
        stop_sequences: [],
        temperature: .9,
        return_likelihoods: 'NONE',
        stream: true

    } )

    const response =  await fetch('https://api.cohere.ai/v2/generate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body
    })

    if (!response.ok) {
        return new Response(await response.text(), {
            status:response.status
        })
    }
    const stream = CohereStream(response)

    return new StreamingTextResponse(stream)

}