import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    // First, let's check what columns exist in the students table
    const students = await sql`
      SELECT 
        id,
        student_id,
        first_name,
        last_name,
        email,
        phone,
        current_grade as grade_level,
        status
      FROM students
      WHERE status = 'active'
      ORDER BY grade_level, last_name, first_name
    `

    return Response.json(students)
  } catch (error) {
    console.error("Error fetching students:", error)

    // Let's try a simpler query to see what's available
    try {
      const simpleQuery = await sql`SELECT * FROM students LIMIT 1`
      console.log("Available columns:", Object.keys(simpleQuery[0] || {}))
    } catch (e) {
      console.error("Error checking table structure:", e)
    }

    if (error instanceof Error) {
      return Response.json({ error: "Failed to fetch students", details: error.message }, { status: 500 });
    }
    return Response.json({ error: "Failed to fetch students", details: "An unknown error occurred" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Generate student ID
    const studentId = `STU${new Date().getFullYear()}${String(Date.now()).slice(-6)}`

    const result = await sql`
      INSERT INTO students (
        student_id,
        first_name,
        last_name,
        email,
        phone,
        grade_level,
        status
      ) VALUES (
        ${studentId},
        ${data.firstName},
        ${data.lastName},
        ${data.email || null},
        ${data.phone || null},
        ${Number.parseInt(data.gradeLevel)},
        'active'
      )
      RETURNING id, student_id
    `

    return Response.json({
      success: true,
      studentId: result[0].student_id,
      message: "Student added successfully!",
    })
  } catch (error) {
    console.error("Error adding student:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to add student",
        details: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    )
  }
}
