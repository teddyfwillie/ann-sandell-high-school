-- Create the main database schema for Ann Sandell High School

-- Students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    date_of_birth DATE NOT NULL,
    gender VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    current_grade INTEGER CHECK (current_grade BETWEEN 9 AND 12),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    graduation_date DATE,
    gpa DECIMAL(3,2) CHECK (gpa >= 0 AND gpa <= 4.0),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'graduated', 'transferred', 'withdrawn')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Parents/Guardians table
CREATE TABLE parents_guardians (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    relationship VARCHAR(50) NOT NULL CHECK (relationship IN ('mother', 'father', 'guardian', 'other')),
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    is_primary_contact BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Staff table
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    position VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    hire_date DATE NOT NULL,
    salary DECIMAL(10,2),
    qualifications TEXT,
    bio TEXT,
    profile_image_url TEXT,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'retired')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Academic departments
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    head_of_department_id INTEGER REFERENCES staff(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    department_id INTEGER REFERENCES departments(id),
    grade_level INTEGER CHECK (grade_level BETWEEN 9 AND 12),
    credits DECIMAL(3,1) DEFAULT 1.0,
    is_ap_course BOOLEAN DEFAULT FALSE,
    is_honors_course BOOLEAN DEFAULT FALSE,
    prerequisites TEXT,
    max_students INTEGER DEFAULT 25,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Class sections (specific instances of courses)
CREATE TABLE class_sections (
    id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(id),
    teacher_id INTEGER REFERENCES staff(id),
    section_name VARCHAR(50),
    academic_year VARCHAR(9) NOT NULL, -- e.g., '2024-2025'
    semester VARCHAR(20) NOT NULL CHECK (semester IN ('fall', 'spring', 'full_year')),
    room_number VARCHAR(20),
    schedule_time VARCHAR(100),
    max_enrollment INTEGER DEFAULT 25,
    current_enrollment INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student enrollments in classes
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    class_section_id INTEGER REFERENCES class_sections(id),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    final_grade VARCHAR(5),
    grade_points DECIMAL(3,2),
    status VARCHAR(20) DEFAULT 'enrolled' CHECK (status IN ('enrolled', 'completed', 'dropped', 'withdrawn')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, class_section_id)
);

-- Applications table
CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    application_number VARCHAR(20) UNIQUE NOT NULL,
    student_first_name VARCHAR(100) NOT NULL,
    student_last_name VARCHAR(100) NOT NULL,
    student_email VARCHAR(255),
    student_phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(20),
    current_grade INTEGER CHECK (current_grade BETWEEN 8 AND 12),
    current_school VARCHAR(200),
    intended_start_date VARCHAR(20),
    
    -- Parent/Guardian information
    parent_first_name VARCHAR(100) NOT NULL,
    parent_last_name VARCHAR(100) NOT NULL,
    parent_relationship VARCHAR(50),
    parent_email VARCHAR(255) NOT NULL,
    parent_phone VARCHAR(20) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    
    -- Academic information
    current_gpa DECIMAL(3,2),
    test_scores TEXT,
    academic_interests TEXT,
    extracurriculars TEXT,
    
    -- Additional information
    why_applying TEXT,
    special_needs TEXT,
    additional_info TEXT,
    
    -- Application status
    status VARCHAR(20) DEFAULT 'submitted' CHECK (status IN ('submitted', 'under_review', 'interview_scheduled', 'accepted', 'rejected', 'waitlisted')),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP,
    decision_date DATE,
    notes TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Academic records/transcripts
CREATE TABLE academic_records (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    academic_year VARCHAR(9) NOT NULL,
    semester VARCHAR(20) NOT NULL,
    course_name VARCHAR(200) NOT NULL,
    course_code VARCHAR(20),
    grade VARCHAR(5),
    grade_points DECIMAL(3,2),
    credits DECIMAL(3,1),
    is_ap_course BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Extracurricular activities
CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('sport', 'club', 'academic', 'arts', 'service', 'other')),
    description TEXT,
    advisor_id INTEGER REFERENCES staff(id),
    meeting_schedule VARCHAR(200),
    max_participants INTEGER,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student participation in activities
CREATE TABLE student_activities (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    activity_id INTEGER REFERENCES activities(id),
    academic_year VARCHAR(9) NOT NULL,
    role VARCHAR(100), -- e.g., 'member', 'captain', 'president'
    start_date DATE DEFAULT CURRENT_DATE,
    end_date DATE,
    achievements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, activity_id, academic_year)
);

-- Events and announcements
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_type VARCHAR(50) NOT NULL CHECK (event_type IN ('academic', 'sports', 'arts', 'social', 'administrative', 'other')),
    start_date DATE NOT NULL,
    end_date DATE,
    start_time TIME,
    end_time TIME,
    location VARCHAR(200),
    is_public BOOLEAN DEFAULT TRUE,
    max_attendees INTEGER,
    created_by INTEGER REFERENCES staff(id),
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact inquiries from website
CREATE TABLE contact_inquiries (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    inquiry_type VARCHAR(50) DEFAULT 'general' CHECK (inquiry_type IN ('general', 'admissions', 'academics', 'support')),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    assigned_to INTEGER REFERENCES staff(id),
    response TEXT,
    responded_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_students_grade ON students(current_grade);
CREATE INDEX idx_students_status ON students(status);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_submitted ON applications(submitted_at);
CREATE INDEX idx_enrollments_student ON enrollments(student_id);
CREATE INDEX idx_enrollments_section ON enrollments(class_section_id);
CREATE INDEX idx_class_sections_year ON class_sections(academic_year);
CREATE INDEX idx_events_date ON events(start_date);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
