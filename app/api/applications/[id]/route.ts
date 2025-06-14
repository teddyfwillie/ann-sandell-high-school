import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const id = params.id

    await sql`
      UPDATE applications 
      SET 
        status = ${data.status},
        student_first_name = ${data.student_first_name || null},
        student_last_name = ${data.student_last_name || null},
        student_email = ${data.student_email || null},
        current_grade = ${data.current_grade ? Number.parseInt(data.current_grade) : null}
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Application updated successfully" })
  } catch (error) {
    console.error("Error updating application:", error)
    return Response.json({ error: "Failed to update application" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    await sql`
      DELETE FROM applications 
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Application deleted successfully" })
  } catch (error) {
    console.error("Error deleting application:", error)
    return Response.json({ error: "Failed to delete application" }, { status: 500 })
  }
}
