import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const id = params.id

    await sql`
      UPDATE courses 
      SET 
        name = ${data.name},
        description = ${data.description || null},
        grade_level = ${Number.parseInt(data.grade_level)},
        credits = ${Number.parseFloat(data.credits)},
        is_ap_course = ${data.is_ap_course || false},
        is_honors_course = ${data.is_honors_course || false},
        prerequisites = ${data.prerequisites || null}
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Course updated successfully" })
  } catch (error) {
    console.error("Error updating course:", error)
    return Response.json({ error: "Failed to update course" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    await sql`
      UPDATE courses 
      SET status = 'inactive'
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Course deactivated successfully" })
  } catch (error) {
    console.error("Error deactivating course:", error)
    return Response.json({ error: "Failed to deactivate course" }, { status: 500 })
  }
}
