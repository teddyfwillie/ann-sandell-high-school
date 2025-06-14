import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const id = params.id

    await sql`
      UPDATE staff 
      SET 
        first_name = ${data.first_name},
        last_name = ${data.last_name},
        email = ${data.email},
        phone = ${data.phone || null},
        position = ${data.position},
        department = ${data.department},
        qualifications = ${data.qualifications || null},
        bio = ${data.bio || null}
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Staff updated successfully" })
  } catch (error) {
    console.error("Error updating staff:", error)
    return Response.json({ error: "Failed to update staff" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    await sql`
      UPDATE staff 
      SET status = 'inactive'
      WHERE id = ${Number.parseInt(id)}
    `

    return Response.json({ success: true, message: "Staff deactivated successfully" })
  } catch (error) {
    console.error("Error deactivating staff:", error)
    return Response.json({ error: "Failed to deactivate staff" }, { status: 500 })
  }
}
