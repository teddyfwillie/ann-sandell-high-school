import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const departments = await sql`
      SELECT 
        d.id,
        d.name,
        d.description,
        s.first_name as head_first_name,
        s.last_name as head_last_name,
        COUNT(c.id) as course_count
      FROM departments d
      LEFT JOIN staff s ON d.head_of_department_id = s.id
      LEFT JOIN courses c ON d.id = c.department_id AND c.status = 'active'
      GROUP BY d.id, d.name, d.description, s.first_name, s.last_name
      ORDER BY d.name
    `

    return Response.json(departments)
  } catch (error) {
    console.error("Error fetching departments:", error)
    return Response.json({ error: "Failed to fetch departments" }, { status: 500 })
  }
}
