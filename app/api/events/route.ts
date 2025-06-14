import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")
    const upcoming = searchParams.get("upcoming")

    if (type && upcoming === "true") {
      // Filter by type and upcoming
      const events = await sql`
        SELECT 
          id,
          title,
          description,
          event_type,
          start_date,
          end_date,
          start_time,
          end_time,
          location,
          is_public
        FROM events
        WHERE event_type = ${type} AND start_date >= CURRENT_DATE
        ORDER BY start_date ASC
      `
      return Response.json(events)
    } else if (type) {
      // Filter by type only
      const events = await sql`
        SELECT 
          id,
          title,
          description,
          event_type,
          start_date,
          end_date,
          start_time,
          end_time,
          location,
          is_public
        FROM events
        WHERE event_type = ${type}
        ORDER BY start_date DESC
      `
      return Response.json(events)
    } else if (upcoming === "true") {
      // Filter by upcoming only
      const events = await sql`
        SELECT 
          id,
          title,
          description,
          event_type,
          start_date,
          end_date,
          start_time,
          end_time,
          location,
          is_public
        FROM events
        WHERE start_date >= CURRENT_DATE
        ORDER BY start_date ASC
      `
      return Response.json(events)
    } else {
      // No filters - get all events
      const events = await sql`
        SELECT 
          id,
          title,
          description,
          event_type,
          start_date,
          end_date,
          start_time,
          end_time,
          location,
          is_public
        FROM events
        ORDER BY start_date DESC
      `
      return Response.json(events)
    }
  } catch (error) {
    console.error("Error fetching events:", error)
    return Response.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}
