import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const department = searchParams.get("department")
    const grade = searchParams.get("grade")

    if (department && grade) {
      // Filter by both department and grade level
      const courses = await sql`
        SELECT 
          c.id,
          c.course_code,
          c.name,
          c.description,
          c.grade_level,
          c.credits,
          c.is_ap_course,
          c.is_honors_course,
          c.prerequisites,
          d.name as department_name
        FROM courses c
        LEFT JOIN departments d ON c.department_id = d.id
        WHERE d.name = ${department} AND c.grade_level = ${Number.parseInt(grade)} AND c.status = 'active'
        ORDER BY c.course_code
      `
      return Response.json(courses)
    } else if (department) {
      // Filter by department only
      const courses = await sql`
        SELECT 
          c.id,
          c.course_code,
          c.name,
          c.description,
          c.grade_level,
          c.credits,
          c.is_ap_course,
          c.is_honors_course,
          c.prerequisites,
          d.name as department_name
        FROM courses c
        LEFT JOIN departments d ON c.department_id = d.id
        WHERE d.name = ${department} AND c.status = 'active'
        ORDER BY c.course_code
      `
      return Response.json(courses)
    } else if (grade) {
      // Filter by grade level only
      const courses = await sql`
        SELECT 
          c.id,
          c.course_code,
          c.name,
          c.description,
          c.grade_level,
          c.credits,
          c.is_ap_course,
          c.is_honors_course,
          c.prerequisites,
          d.name as department_name
        FROM courses c
        LEFT JOIN departments d ON c.department_id = d.id
        WHERE c.grade_level = ${Number.parseInt(grade)} AND c.status = 'active'
        ORDER BY c.course_code
      `
      return Response.json(courses)
    } else {
      // Get all courses
      const courses = await sql`
        SELECT 
          c.id,
          c.course_code,
          c.name,
          c.description,
          c.grade_level,
          c.credits,
          c.is_ap_course,
          c.is_honors_course,
          c.prerequisites,
          d.name as department_name
        FROM courses c
        LEFT JOIN departments d ON c.department_id = d.id
        WHERE c.status = 'active'
        ORDER BY c.course_code
      `
      return Response.json(courses)
    }
  } catch (error) {
    console.error("Error fetching courses:", error)
    return Response.json({ error: "Failed to fetch courses" }, { status: 500 })
  }
}
