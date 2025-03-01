import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.provinsi || !body.kabkota) {
      return NextResponse.json(
        { error: 'Provinsi and kabkota are required' },
        { status: 400 }
      );
    }

    // Forward the request to the external API
    const response = await fetch('https://equran.id/api/v2/imsakiyah', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify({
        provinsi: body.provinsi,
        kabkota: body.kabkota
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from external API' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in imsakiyah API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}