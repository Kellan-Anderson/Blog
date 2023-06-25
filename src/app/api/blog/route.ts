import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import { blog } from "~/server/schema";

const insertBlogSchema = createInsertSchema(blog);
const selectBlogSchema = createSelectSchema(blog);

export async function GET(req: NextRequest) {
  const [data] = await db.select().from(blog);

  try {
    const body = selectBlogSchema.parse(data);
    return new NextResponse(JSON.stringify(body));
  } catch (error) {
    console.log("Blog GET error: ", error);
    return new NextResponse("Error fetching data", { status: 500 })
  }
}


export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const data = insertBlogSchema.parse(body);
    await db.insert(blog).values(data);
    return new NextResponse("Success", { status: 201 });
  } catch (error) {
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}