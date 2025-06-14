import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const locations = await sql`
      SELECT 
        id,
        name,
        address,
        phone,
        type,
        description
      FROM school_locations
      ORDER BY 
        CASE type
          WHEN 'Primary Location' THEN 1
          WHEN 'Sports & Recreation' THEN 2
          WHEN 'Performing & Visual Arts' THEN 3
          ELSE 4
        END,
        name
    `

    return Response.json(locations)
  } catch (error) {
    console.error("Error fetching locations:", error)
    return Response.json({ error: "Failed to fetch locations" }, { status: 500 })
  }
}
