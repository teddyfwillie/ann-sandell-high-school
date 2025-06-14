import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const applications = await sql`
      SELECT 
        id,
        application_number,
        student_first_name,
        student_last_name,
        student_email,
        parent_email,
        current_grade,
        intended_start_date,
        status,
        submitted_at
      FROM applications
      ORDER BY submitted_at DESC
      LIMIT 50
    `

    return Response.json(applications)
  } catch (error) {
    console.error("Error fetching applications:", error)
    return Response.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Generate application number
    const appNumber = `APP${new Date().getFullYear()}${String(Date.now()).slice(-6)}`

    const result = await sql`
      INSERT INTO applications (
        application_number,
        student_first_name,
        student_last_name,
        student_email,
        student_phone,
        date_of_birth,
        gender,
        current_grade,
        current_school,
        intended_start_date,
        parent_first_name,
        parent_last_name,
        parent_relationship,
        parent_email,
        parent_phone,
        address,
        city,
        state,
        zip_code,
        current_gpa,
        test_scores,
        academic_interests,
        extracurriculars,
        why_applying,
        special_needs,
        additional_info,
        status
      ) VALUES (
        ${appNumber},
        ${data.studentFirstName},
        ${data.studentLastName},
        ${data.studentEmail || null},
        ${data.studentPhone || null},
        ${data.dateOfBirth || null},
        ${data.gender || null},
        ${Number.parseInt(data.currentGrade) || null},
        ${data.currentSchool},
        ${data.intendedStartDate || null},
        ${data.parentFirstName},
        ${data.parentLastName},
        ${data.parentRelationship || null},
        ${data.parentEmail},
        ${data.parentPhone},
        ${data.address || null},
        ${data.city || null},
        ${data.state || null},
        ${data.zipCode || null},
        ${data.currentGpa ? Number.parseFloat(data.currentGpa) : null},
        ${data.testScores || null},
        ${data.academicInterests},
        ${data.extracurriculars || null},
        ${data.whyApplying},
        ${data.specialNeeds || null},
        ${data.additionalInfo || null},
        'submitted'
      )
      RETURNING id, application_number
    `

    return Response.json({
      success: true,
      applicationNumber: result[0].application_number,
      message: "Application submitted successfully!",
    })
  } catch (error) {
    console.error("Error submitting application:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to submit application",
      },
      { status: 500 },
    )
  }
}
