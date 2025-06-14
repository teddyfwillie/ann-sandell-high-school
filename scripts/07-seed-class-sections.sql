-- Create class sections for the current academic year (2024-2025)

-- Mathematics sections
INSERT INTO class_sections (course_id, teacher_id, section_name, academic_year, semester, room_number, schedule_time, max_enrollment) VALUES
((SELECT id FROM courses WHERE course_code = 'MATH101'), (SELECT id FROM staff WHERE employee_id = 'EMP007'), 'Algebra I - Period 1', '2024-2025', 'full_year', 'M101', 'Period 1 (8:00-8:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'MATH101'), (SELECT id FROM staff WHERE employee_id = 'EMP007'), 'Algebra I - Period 3', '2024-2025', 'full_year', 'M101', 'Period 3 (10:00-10:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'MATH102'), (SELECT id FROM staff WHERE employee_id = 'EMP007'), 'Geometry - Period 2', '2024-2025', 'full_year', 'M102', 'Period 2 (9:00-9:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'MATH201'), (SELECT id FROM staff WHERE employee_id = 'EMP007'), 'Algebra II - Period 4', '2024-2025', 'full_year', 'M101', 'Period 4 (11:00-11:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'MATH301'), (SELECT id FROM staff WHERE employee_id = 'EMP007'), 'AP Calculus AB - Period 6', '2024-2025', 'full_year', 'M103', 'Period 6 (1:00-1:50 PM)', 20),

-- Science sections
((SELECT id FROM courses WHERE course_code = 'SCI101'), (SELECT id FROM staff WHERE employee_id = 'EMP008'), 'Biology - Period 1', '2024-2025', 'full_year', 'S101', 'Period 1 (8:00-8:50 AM)', 24),
((SELECT id FROM courses WHERE course_code = 'SCI101'), (SELECT id FROM staff WHERE employee_id = 'EMP008'), 'Biology - Period 3', '2024-2025', 'full_year', 'S101', 'Period 3 (10:00-10:50 AM)', 24),
((SELECT id FROM courses WHERE course_code = 'SCI102'), (SELECT id FROM staff WHERE employee_id = 'EMP008'), 'Chemistry - Period 2', '2024-2025', 'full_year', 'S102', 'Period 2 (9:00-9:50 AM)', 24),
((SELECT id FROM courses WHERE course_code = 'SCI201'), (SELECT id FROM staff WHERE employee_id = 'EMP008'), 'AP Biology - Period 5', '2024-2025', 'full_year', 'S103', 'Period 5 (12:00-12:50 PM)', 20),

-- English sections
((SELECT id FROM courses WHERE course_code = 'ENG101'), (SELECT id FROM staff WHERE employee_id = 'EMP009'), 'English I - Period 1', '2024-2025', 'full_year', 'E101', 'Period 1 (8:00-8:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'ENG101'), (SELECT id FROM staff WHERE employee_id = 'EMP009'), 'English I - Period 2', '2024-2025', 'full_year', 'E101', 'Period 2 (9:00-9:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'ENG102'), (SELECT id FROM staff WHERE employee_id = 'EMP009'), 'English II - Period 3', '2024-2025', 'full_year', 'E102', 'Period 3 (10:00-10:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'ENG301'), (SELECT id FROM staff WHERE employee_id = 'EMP009'), 'AP Literature - Period 6', '2024-2025', 'full_year', 'E103', 'Period 6 (1:00-1:50 PM)', 20),

-- Social Studies sections
((SELECT id FROM courses WHERE course_code = 'SS101'), (SELECT id FROM staff WHERE employee_id = 'EMP010'), 'World History - Period 2', '2024-2025', 'full_year', 'SS101', 'Period 2 (9:00-9:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'SS102'), (SELECT id FROM staff WHERE employee_id = 'EMP010'), 'US History - Period 4', '2024-2025', 'full_year', 'SS102', 'Period 4 (11:00-11:50 AM)', 25),
((SELECT id FROM courses WHERE course_code = 'SS202'), (SELECT id FROM staff WHERE employee_id = 'EMP010'), 'AP US History - Period 5', '2024-2025', 'full_year', 'SS103', 'Period 5 (12:00-12:50 PM)', 20);

-- Update current enrollment for some sections (simulate some students already enrolled)
UPDATE class_sections SET current_enrollment = 18 WHERE section_name = 'Algebra I - Period 1';
UPDATE class_sections SET current_enrollment = 22 WHERE section_name = 'Biology - Period 1';
UPDATE class_sections SET current_enrollment = 20 WHERE section_name = 'English I - Period 1';
UPDATE class_sections SET current_enrollment = 15 WHERE section_name = 'AP Calculus AB - Period 6';
UPDATE class_sections SET current_enrollment = 16 WHERE section_name = 'AP Biology - Period 5';
