-- Update with real website data from the Ann Sandell High School site

-- Clear existing sample data and insert real data
DELETE FROM staff WHERE employee_id LIKE 'EMP%';
DELETE FROM departments;

-- Insert real departments with actual descriptions from website
INSERT INTO departments (name, description) VALUES
('Mathematics', 'From Algebra I to AP Calculus BC, building strong mathematical foundations'),
('Science', 'Comprehensive STEM education with hands-on laboratory experiences'),
('English & Literature', 'Developing critical thinking and communication through literature and writing'),
('Social Studies', 'Understanding history, culture, and global perspectives'),
('Fine Arts', 'Fostering creativity and artistic expression across multiple mediums'),
('Performing Arts', 'Musical education and performance opportunities for all skill levels'),
('Technology', 'Preparing students for the digital future with cutting-edge skills'),
('Physical Education', 'Promoting health, fitness, and teamwork through sports and wellness'),
('Foreign Languages', 'World language instruction and cultural understanding'),
('Special Programs', 'Advanced Placement, honors courses, and specialized academic tracks');

-- Insert real staff data from the website
INSERT INTO staff (employee_id, first_name, last_name, email, phone, position, department, hire_date, qualifications, bio, profile_image_url) VALUES
('PRIN001', 'Sarah', 'Johnson', 'sjohnson@annsandellhs.edu', '(555) 123-4567', 'Principal', 'Administration', '2009-08-01', 'Ed.D. in Educational Leadership', 'Ed.D. in Educational Leadership with 15+ years in education. Passionate about student success and innovative teaching methods.', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('VP001', 'David', 'Chen', 'dchen@annsandellhs.edu', '(555) 123-4567', 'Vice Principal', 'Administration', '2012-07-15', 'M.Ed. in Administration', 'M.Ed. in Administration, Former Mathematics Department Head. Specializes in curriculum development and student assessment.', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('AD001', 'Emily', 'Rodriguez', 'erodriguez@annsandellhs.edu', '(555) 123-4567', 'Academic Director', 'Administration', '2012-08-20', 'M.A. in Curriculum Design', 'M.A. in Curriculum Design with 12 years teaching experience. Expert in personalized learning and academic excellence.', 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('DEAN001', 'James', 'Wilson', 'jwilson@annsandellhs.edu', '(555) 123-4567', 'Dean of Students', 'Administration', '2015-06-10', 'M.S. in School Counseling', 'M.S. in School Counseling. Dedicated to student welfare, character development, and creating inclusive environments.', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('DIR001', 'Lisa', 'Anderson', 'landerson@annsandellhs.edu', '(555) 123-4567', 'Director of Arts & Sciences', 'Administration', '2014-08-15', 'Ph.D. in Educational Psychology', 'Ph.D. in Educational Psychology. Leader in integrating arts and sciences for comprehensive student development.', 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('ATH001', 'Robert', 'Taylor', 'rtaylor@annsandellhs.edu', '(555) 123-4567', 'Athletic Director', 'Physical Education', '2018-07-01', 'M.Ed. in Physical Education', 'M.Ed. in Physical Education. Former college athlete with expertise in sports psychology and student-athlete development.', 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop');

-- Clear and insert real courses data
DELETE FROM courses;

-- Mathematics courses from website
INSERT INTO courses (course_code, name, description, department_id, grade_level, credits, is_ap_course, is_honors_course) VALUES
('MATH101', 'Algebra I & II', 'Fundamental and advanced algebraic concepts', (SELECT id FROM departments WHERE name = 'Mathematics'), 9, 1.0, FALSE, FALSE),
('MATH102', 'Geometry', 'Plane and solid geometry with proofs', (SELECT id FROM departments WHERE name = 'Mathematics'), 10, 1.0, FALSE, FALSE),
('MATH201', 'Pre-Calculus', 'Preparation for advanced calculus', (SELECT id FROM departments WHERE name = 'Mathematics'), 11, 1.0, FALSE, FALSE),
('MATH301', 'AP Calculus AB/BC', 'Advanced Placement calculus courses', (SELECT id FROM departments WHERE name = 'Mathematics'), 12, 1.0, TRUE, FALSE),
('MATH302', 'AP Statistics', 'Statistical analysis and probability', (SELECT id FROM departments WHERE name = 'Mathematics'), 11, 1.0, TRUE, FALSE),
('MATH303', 'Discrete Mathematics', 'Mathematical structures and logic', (SELECT id FROM departments WHERE name = 'Mathematics'), 12, 1.0, FALSE, TRUE),

-- Science courses from website
('SCI101', 'Biology', 'Introduction to life sciences', (SELECT id FROM departments WHERE name = 'Science'), 9, 1.0, FALSE, FALSE),
('SCI102', 'Chemistry', 'Fundamental chemistry principles', (SELECT id FROM departments WHERE name = 'Science'), 10, 1.0, FALSE, FALSE),
('SCI103', 'Physics', 'Classical and modern physics', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, FALSE, FALSE),
('SCI201', 'AP Biology', 'Advanced Placement biology', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, TRUE, FALSE),
('SCI202', 'AP Chemistry', 'Advanced Placement chemistry', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, TRUE, FALSE),
('SCI203', 'AP Physics', 'Advanced Placement physics', (SELECT id FROM departments WHERE name = 'Science'), 12, 1.0, TRUE, FALSE),
('SCI204', 'Environmental Science', 'Environmental systems and sustainability', (SELECT id FROM departments WHERE name = 'Science'), 12, 1.0, FALSE, FALSE),

-- English courses from website
('ENG101', 'English I-IV', 'Comprehensive language arts program', (SELECT id FROM departments WHERE name = 'English & Literature'), 9, 1.0, FALSE, FALSE),
('ENG201', 'AP Literature', 'Advanced Placement literature', (SELECT id FROM departments WHERE name = 'English & Literature'), 12, 1.0, TRUE, FALSE),
('ENG202', 'AP Language', 'Advanced Placement language and composition', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 1.0, TRUE, FALSE),
('ENG301', 'Creative Writing', 'Fiction, poetry, and creative expression', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 0.5, FALSE, FALSE),
('ENG302', 'Public Speaking', 'Communication and presentation skills', (SELECT id FROM departments WHERE name = 'English & Literature'), 10, 0.5, FALSE, FALSE),
('ENG303', 'Journalism', 'News writing and media production', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 1.0, FALSE, FALSE),

-- Social Studies courses from website
('SS101', 'World History', 'Global civilizations and cultures', (SELECT id FROM departments WHERE name = 'Social Studies'), 9, 1.0, FALSE, FALSE),
('SS102', 'US History', 'American history and government', (SELECT id FROM departments WHERE name = 'Social Studies'), 10, 1.0, FALSE, FALSE),
('SS201', 'AP World History', 'Advanced Placement world history', (SELECT id FROM departments WHERE name = 'Social Studies'), 10, 1.0, TRUE, FALSE),
('SS202', 'AP US History', 'Advanced Placement US history', (SELECT id FROM departments WHERE name = 'Social Studies'), 11, 1.0, TRUE, FALSE),
('SS203', 'Government', 'American government and civics', (SELECT id FROM departments WHERE name = 'Social Studies'), 12, 0.5, FALSE, FALSE),
('SS204', 'Economics', 'Economic principles and systems', (SELECT id FROM departments WHERE name = 'Social Studies'), 12, 0.5, FALSE, FALSE),
('SS205', 'Psychology', 'Introduction to psychological science', (SELECT id FROM departments WHERE name = 'Social Studies'), 11, 0.5, FALSE, FALSE),

-- Fine Arts courses from website
('ART101', 'Drawing & Painting', 'Visual arts fundamentals', (SELECT id FROM departments WHERE name = 'Fine Arts'), 9, 1.0, FALSE, FALSE),
('ART102', 'Sculpture', 'Three-dimensional art creation', (SELECT id FROM departments WHERE name = 'Fine Arts'), 10, 1.0, FALSE, FALSE),
('ART201', 'Photography', 'Digital and film photography', (SELECT id FROM departments WHERE name = 'Fine Arts'), 10, 1.0, FALSE, FALSE),
('ART202', 'Digital Art', 'Computer graphics and design', (SELECT id FROM departments WHERE name = 'Fine Arts'), 11, 1.0, FALSE, FALSE),
('ART301', 'Art History', 'Survey of art through history', (SELECT id FROM departments WHERE name = 'Fine Arts'), 11, 1.0, FALSE, FALSE),
('ART302', 'Portfolio Development', 'Advanced art portfolio creation', (SELECT id FROM departments WHERE name = 'Fine Arts'), 12, 1.0, FALSE, FALSE),

-- Performing Arts courses from website
('MUS101', 'Band', 'Instrumental ensemble performance', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),
('MUS102', 'Orchestra', 'String and full orchestra', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),
('MUS103', 'Choir', 'Vocal ensemble and performance', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),
('MUS201', 'Music Theory', 'Music composition and analysis', (SELECT id FROM departments WHERE name = 'Performing Arts'), 10, 1.0, FALSE, FALSE),
('MUS301', 'Jazz Ensemble', 'Jazz performance and improvisation', (SELECT id FROM departments WHERE name = 'Performing Arts'), 11, 1.0, FALSE, FALSE),
('THEA101', 'Theater Arts', 'Acting and dramatic performance', (SELECT id FROM departments WHERE name = 'Performing Arts'), 10, 1.0, FALSE, FALSE),
('DANCE101', 'Dance', 'Movement and choreography', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),

-- Technology courses from website
('TECH101', 'Computer Science', 'Programming fundamentals', (SELECT id FROM departments WHERE name = 'Technology'), 9, 1.0, FALSE, FALSE),
('TECH201', 'AP Computer Science', 'Advanced programming concepts', (SELECT id FROM departments WHERE name = 'Technology'), 11, 1.0, TRUE, FALSE),
('TECH202', 'Web Development', 'HTML, CSS, JavaScript, and web design', (SELECT id FROM departments WHERE name = 'Technology'), 10, 1.0, FALSE, FALSE),
('TECH203', 'Robotics', 'Engineering and robot programming', (SELECT id FROM departments WHERE name = 'Technology'), 11, 1.0, FALSE, FALSE),
('TECH204', 'Digital Media', 'Multimedia production and design', (SELECT id FROM departments WHERE name = 'Technology'), 10, 1.0, FALSE, FALSE),
('TECH205', 'Cybersecurity', 'Information security principles', (SELECT id FROM departments WHERE name = 'Technology'), 12, 1.0, FALSE, FALSE),

-- Physical Education courses from website
('PE101', 'PE I-IV', 'Physical fitness and sports', (SELECT id FROM departments WHERE name = 'Physical Education'), 9, 1.0, FALSE, FALSE),
('PE201', 'Health Education', 'Personal health and wellness', (SELECT id FROM departments WHERE name = 'Physical Education'), 10, 0.5, FALSE, FALSE),
('PE202', 'Sports Medicine', 'Athletic training and injury prevention', (SELECT id FROM departments WHERE name = 'Physical Education'), 11, 1.0, FALSE, FALSE),
('PE203', 'Nutrition', 'Nutritional science and healthy eating', (SELECT id FROM departments WHERE name = 'Physical Education'), 11, 0.5, FALSE, FALSE),
('PE204', 'Team Sports', 'Competitive team athletics', (SELECT id FROM departments WHERE name = 'Physical Education'), 9, 1.0, FALSE, FALSE),
('PE205', 'Individual Fitness', 'Personal fitness and conditioning', (SELECT id FROM departments WHERE name = 'Physical Education'), 10, 1.0, FALSE, FALSE);

-- Insert real school timeline events
DELETE FROM events WHERE event_type = 'historical';

INSERT INTO events (title, description, event_type, start_date, location, is_public, created_by) VALUES
('School Founded', 'Ann Sandell High School was established with a vision of academic excellence and character development.', 'historical', '1985-08-15', 'Main Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('First Graduation Class', 'Our inaugural class of 50 students graduated with 100% college acceptance rate.', 'historical', '1990-05-25', 'Main Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Athletic Complex Built', 'Opened state-of-the-art athletic facilities to support comprehensive student development.', 'historical', '1995-09-01', 'Athletic Complex', TRUE, (SELECT id FROM staff WHERE employee_id = 'ATH001')),
('Technology Integration', 'Became one of the first schools to integrate technology across all curriculum areas.', 'historical', '2000-08-15', 'Technology Center', TRUE, (SELECT id FROM staff WHERE employee_id = 'DIR001')),
('Arts Center Opening', 'Dedicated performing and visual arts center to nurture creative talents.', 'historical', '2005-10-01', 'Arts Center', TRUE, (SELECT id FROM staff WHERE employee_id = 'DIR001')),
('National Recognition', 'Received National Blue Ribbon Award for academic excellence and student achievement.', 'historical', '2010-11-15', 'Main Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('STEM Program Launch', 'Launched comprehensive STEM program with partnerships with leading universities.', 'historical', '2015-08-20', 'Science Building', TRUE, (SELECT id FROM staff WHERE employee_id = 'DIR001')),
('Digital Innovation', 'Successfully transitioned to hybrid learning model, maintaining educational excellence.', 'historical', '2020-03-15', 'All Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Continued Excellence', 'Celebrating nearly four decades of preparing students for success in higher education.', 'historical', '2024-08-15', 'Main Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001'));

-- Insert real academic calendar events from website
DELETE FROM events WHERE event_type = 'academic' AND start_date >= '2024-08-01';

INSERT INTO events (title, description, event_type, start_date, location, is_public, created_by) VALUES
('School Year Begins', 'First day of classes for all students', 'academic', '2024-08-15', 'All Campus', FALSE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Fall Break', 'Mid-semester break for students and faculty', 'academic', '2024-10-10', 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Winter Break Begins', 'Holiday break through January 3rd', 'academic', '2024-12-18', 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('End of First Semester', 'Final exams and grade reports', 'academic', '2025-01-15', 'All Campus', FALSE, (SELECT id FROM staff WHERE employee_id = 'AD001')),
('Spring Break', 'Mid-semester spring break', 'academic', '2025-03-25', 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Final Exams Begin', 'End-of-year assessments', 'academic', '2025-05-15', 'All Campus', FALSE, (SELECT id FROM staff WHERE employee_id = 'AD001')),
('Graduation Ceremony', 'Commencement for graduating seniors', 'academic', '2025-05-25', 'Football Stadium', TRUE, (SELECT id FROM staff WHERE employee_id = 'PRIN001')),
('Last Day of School', 'End of academic year', 'academic', '2025-05-30', 'All Campus', FALSE, (SELECT id FROM staff WHERE employee_id = 'PRIN001'));

-- Insert real locations from website
CREATE TABLE IF NOT EXISTS school_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(20),
    type VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO school_locations (name, address, phone, type, description) VALUES
('Main Campus', '123 Education Street, Learning City, LC 12345', '(555) 123-4567', 'Primary Location', 'Primary academic buildings and administrative offices'),
('Athletic Complex', '456 Sports Avenue, Learning City, LC 12346', '(555) 123-4568', 'Sports & Recreation', 'State-of-the-art athletic facilities and sports fields'),
('Arts Center', '789 Creative Boulevard, Learning City, LC 12347', '(555) 123-4569', 'Performing & Visual Arts', 'Dedicated performing and visual arts facilities');
