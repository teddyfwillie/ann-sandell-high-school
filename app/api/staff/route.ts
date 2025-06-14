import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const department = searchParams.get("department")

    if (department) {
      // Filter by department
      const staff = await sql`
        SELECT 
          id,
          employee_id,
          first_name,
          last_name,
          email,
          phone,
          position,
          department,
          qualifications,
          bio,
          profile_image_url
        FROM staff 
        WHERE department = ${department} AND status = 'active'
        ORDER BY 
          CASE position
            WHEN 'Principal' THEN 1
            WHEN 'Vice Principal' THEN 2
            WHEN 'Academic Director' THEN 3
            WHEN 'Dean of Students' THEN 4
            WHEN 'Director of Arts & Sciences' THEN 5
            WHEN 'Athletic Director' THEN 6
            ELSE 7
          END,
          last_name, first_name
      `
      return Response.json(staff)
    } else {
      // Get all staff
      const staff = await sql`
        SELECT 
          id,
          employee_id,
          first_name,
          last_name,
          email,
          phone,
          position,
          department,
          qualifications,
          bio,
          profile_image_url
        FROM staff 
        WHERE status = 'active'
        ORDER BY 
          CASE position
            WHEN 'Principal' THEN 1
            WHEN 'Vice Principal' THEN 2
            WHEN 'Academic Director' THEN 3
            WHEN 'Dean of Students' THEN 4
            WHEN 'Director of Arts & Sciences' THEN 5
            WHEN 'Athletic Director' THEN 6
            ELSE 7
          END,
          last_name, first_name
      `
      return Response.json(staff)
    }
  } catch (error) {
    console.error("Error fetching staff:", error)
    return Response.json({ error: "Failed to fetch staff" }, { status: 500 })
  }
}
