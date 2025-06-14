import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    // Get basic statistics
    const [staffCount] = await sql`
      SELECT COUNT(*) as count FROM staff WHERE status = 'active'
    `

    const [studentCount] = await sql`
      SELECT COUNT(*) as count FROM students WHERE status = 'active'
    `

    const [courseCount] = await sql`
      SELECT COUNT(*) as count FROM courses WHERE status = 'active'
    `

    const [applicationCount] = await sql`
      SELECT COUNT(*) as count FROM applications
    `

    // Get recent applications
    const recentApplications = await sql`
      SELECT 
        id,
        application_number,
        student_first_name,
        student_last_name,
        parent_email,
        current_grade,
        status,
        submitted_at
      FROM applications
      ORDER BY submitted_at DESC
      LIMIT 10
    `

    // Get application status breakdown
    const statusBreakdown = await sql`
      SELECT 
        status,
        COUNT(*) as count
      FROM applications
      GROUP BY status
      ORDER BY count DESC
    `

    return Response.json({
      stats: {
        activeStaff: Number.parseInt(staffCount.count),
        enrolledStudents: Number.parseInt(studentCount.count),
        activeCourses: Number.parseInt(courseCount.count),
        totalApplications: Number.parseInt(applicationCount.count),
      },
      recentApplications,
      statusBreakdown,
    })
  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return Response.json({ error: "Failed to fetch statistics" }, { status: 500 })
  }
}
