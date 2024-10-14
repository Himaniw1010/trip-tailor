import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const {url} = await request.json()
  // const imagePath = searchParams.get('imagePath');

  try {
    // Fetch the image from Firebase Storage
    const response = await fetch(url);
    
    // Check if the fetch was successful
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch image" }, { status: response.status });
    }
    
    const blob = await response.blob();

    // Optionally, check for a specific cookie value
    const cookieValue = cookies().get("session") ? true : false;
    console.log('Session cookie value:', cookieValue);

    // Return the blob as the response
    return new Response(blob, {
      status: 200,
      headers: {
        'Content-Type': blob.type,
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
