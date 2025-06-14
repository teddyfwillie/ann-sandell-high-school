-- Insert upcoming school events

INSERT INTO events (title, description, event_type, start_date, end_date, start_time, end_time, location, is_public, created_by) VALUES
('Fall Open House', 'Prospective families are invited to tour our campus, meet faculty, and learn about our academic programs', 'administrative', '2024-10-15', '2024-10-15', '18:00', '20:00', 'Main Campus', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('Homecoming Dance', 'Annual homecoming dance for all high school students', 'social', '2024-10-25', '2024-10-25', '19:00', '22:00', 'School Gymnasium', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP004')),

('Science Fair', 'Student research presentations and STEM project exhibitions', 'academic', '2024-11-08', '2024-11-08', '09:00', '15:00', 'Science Building', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP008')),

('Fall Drama Production: Romeo and Juliet', 'Student theater production of Shakespeare\'s classic play', 'arts', '2024-11-15', '2024-11-17', '19:00', '21:00', 'School Auditorium', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP005')),

('Parent-Teacher Conferences', 'Individual meetings between parents and teachers to discuss student progress', 'administrative', '2024-11-20', '2024-11-21', '15:00', '20:00', 'Various Classrooms', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('Thanksgiving Break', 'School holiday - no classes', 'administrative', '2024-11-25', '2024-11-29', NULL, NULL, 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('Winter Concert', 'Holiday concert featuring school band, orchestra, and choir', 'arts', '2024-12-12', '2024-12-12', '19:00', '21:00', 'School Auditorium', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP005')),

('Final Exams Week', 'End of semester final examinations', 'academic', '2024-12-16', '2024-12-20', '08:00', '15:00', 'Various Classrooms', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP003')),

('Winter Break', 'Holiday break - no classes', 'administrative', '2024-12-21', '2025-01-06', NULL, NULL, 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('Spring Semester Begins', 'First day of spring semester classes', 'academic', '2025-01-07', '2025-01-07', '08:00', '15:00', 'All Campus', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('College Fair', 'Representatives from colleges and universities meet with students', 'academic', '2025-02-14', '2025-02-14', '10:00', '14:00', 'School Gymnasium', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP003')),

('Spring Musical: Les Misérables', 'Student production of the beloved musical', 'arts', '2025-03-20', '2025-03-23', '19:00', '22:00', 'School Auditorium', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP005')),

('Spring Break', 'Mid-semester break', 'administrative', '2025-03-24', '2025-03-28', NULL, NULL, 'N/A', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP001')),

('AP Exam Preparation Week', 'Intensive review sessions for Advanced Placement exams', 'academic', '2025-04-21', '2025-04-25', '15:30', '17:00', 'Various Classrooms', FALSE, (SELECT id FROM staff WHERE employee_id = 'EMP003')),

('Graduation Ceremony', 'Commencement ceremony for graduating seniors', 'administrative', '2025-05-25', '2025-05-25', '18:00', '20:00', 'Football Stadium', TRUE, (SELECT id FROM staff WHERE employee_id = 'EMP001'));
