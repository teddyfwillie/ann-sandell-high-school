import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const id = params.id

    await sql`
      UPDATE students 
      SET 
        first_name = ${data.first_name},
        last_name = ${data.last_name},
        email = ${data.email},
        phone = ${data.phone || null},
        grade_level = ${Number.parseInt(data.grade_level)},
        parent_email = ${data.parent_email || null},
        parent_phone = ${data.parent_phone || null}
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Student updated successfully" })
  } catch (error) {
    console.error("Error updating student:", error)
    return Response.json({ error: "Failed to update student" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    await sql`
      UPDATE students 
      SET status = 'inactive'
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Student deactivated successfully" })
  } catch (error) {
    console.error("Error deactivating student:", error)
    return Response.json({ error: "Failed to deactivate student" }, { status: 500 })
  }
}
