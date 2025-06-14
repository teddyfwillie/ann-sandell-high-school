import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    // Test basic connection
    const result = await sql`SELECT NOW() as current_time`

    // Get some basic stats using correct column names
    const stats = await sql`
      SELECT 
        (SELECT COUNT(*) FROM staff WHERE status = 'active') as active_staff,
        (SELECT COUNT(*) FROM students WHERE status = 'active') as enrolled_students,
        (SELECT COUNT(*) FROM courses WHERE status = 'active') as active_courses,
        (SELECT COUNT(*) FROM applications) as total_applications
    `

    // Get recent applications
    const recentApplications = await sql`
      SELECT 
        application_number,
        student_first_name,
        student_last_name,
        status,
        submitted_at
      FROM applications 
      ORDER BY submitted_at DESC 
      LIMIT 5
    `

    return Response.json({
      success: true,
      timestamp: result[0].current_time,
      stats: stats[0],
      recentApplications,
    })
  } catch (error) {
    console.error("Database connection error:", error)
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
