-- Insert sample applications

INSERT INTO applications (
    application_number, student_first_name, student_last_name, student_email, student_phone,
    date_of_birth, gender, current_grade, current_school, intended_start_date,
    parent_first_name, parent_last_name, parent_relationship, parent_email, parent_phone,
    address, city, state, zip_code,
    current_gpa, academic_interests, extracurriculars, why_applying, status
) VALUES
('APP2024001', 'Ryan', 'Thompson', 'ryan.thompson@email.com', '555-345-6789',
 '2008-06-15', 'male', 10, 'Central Middle School', 'fall-2025',
 'Karen', 'Thompson', 'mother', 'karen.thompson@email.com', '555-345-6790',
 '123 Main Street', 'Nearby City', 'LC', '54321',
 3.7, 'Mathematics and Science, particularly interested in engineering and robotics',
 'Math Club, Science Fair participant, Volunteer at local library',
 'I am drawn to Ann Sandell High School because of its excellent STEM programs and small class sizes. I believe the rigorous academic environment will help me prepare for my goal of studying engineering in college.',
 'under_review'),

('APP2024002', 'Grace', 'Kim', 'grace.kim@email.com', '555-456-7890',
 '2009-03-22', 'female', 9, 'Westside Elementary', 'fall-2025',
 'John', 'Kim', 'father', 'john.kim@email.com', '555-456-7891',
 '456 Elm Avenue', 'Another Town', 'LC', '54322',
 3.9, 'Literature, Creative Writing, and History. I love reading and writing stories.',
 'School Newspaper Editor, Drama Club, National Junior Honor Society',
 'Ann Sandell High School has an outstanding English department and offers many opportunities for creative expression. I am excited about the possibility of contributing to the school newspaper and participating in theater productions.',
 'accepted'),

('APP2024003', 'Marcus', 'Williams', 'marcus.williams@email.com', '555-567-8901',
 '2007-11-08', 'male', 11, 'Transfer from Lincoln High', 'spring-2025',
 'Angela', 'Williams', 'mother', 'angela.williams@email.com', '555-567-8902',
 '789 Oak Boulevard', 'Different City', 'LC', '54323',
 3.6, 'Business and Economics, with interests in entrepreneurship',
 'Student Government Vice President, Debate Team, Volunteer coach for youth basketball',
 'My family is relocating, and I have heard excellent things about Ann Sandell\'s academic reputation and college preparation programs. I am particularly interested in the leadership opportunities and advanced placement courses.',
 'interview_scheduled'),

('APP2024004', 'Lily', 'Zhang', 'lily.zhang@email.com', '555-678-9012',
 '2008-01-14', 'female', 10, 'Riverside Middle School', 'fall-2025',
 'Wei', 'Zhang', 'father', 'wei.zhang@email.com', '555-678-9013',
 '321 Pine Street', 'Neighboring Town', 'LC', '54324',
 3.85, 'Visual Arts and Digital Media, with interest in graphic design',
 'Art Club President, Photography for school yearbook, Community art fair participant',
 'I am passionate about art and design, and Ann Sandell\'s fine arts program is exactly what I am looking for. The opportunity to work with professional-grade equipment and experienced teachers would help me develop my portfolio for art school.',
 'submitted'),

('APP2024005', 'Daniel', 'Lopez', 'daniel.lopez@email.com', '555-789-0123',
 '2009-09-30', 'male', 9, 'Valley Middle School', 'fall-2025',
 'Maria', 'Lopez', 'mother', 'maria.lopez@email.com', '555-789-0124',
 '654 Maple Drive', 'Close City', 'LC', '54325',
 3.75, 'Music and Performing Arts, plays violin and piano',
 'School Orchestra First Chair Violin, Piano recitals, Music theory student',
 'Music is my passion, and I have heard wonderful things about Ann Sandell\'s music program. I would love to be part of the orchestra and continue developing my musical skills while receiving an excellent academic education.',
 'waitlisted');
