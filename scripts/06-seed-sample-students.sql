-- Insert sample students

INSERT INTO students (student_id, first_name, last_name, email, phone, date_of_birth, gender, address, city, state, zip_code, current_grade, gpa) VALUES
('STU2024001', 'Emma', 'Johnson', 'emma.johnson@student.annsandellhs.edu', '555-234-5678', '2007-03-15', 'female', '123 Oak Street', 'Learning City', 'LC', '12345', 11, 3.85),
('STU2024002', 'Michael', 'Chen', 'michael.chen@student.annsandellhs.edu', '555-234-5679', '2006-11-22', 'male', '456 Pine Avenue', 'Learning City', 'LC', '12346', 12, 3.92),
('STU2024003', 'Sophia', 'Rodriguez', 'sophia.rodriguez@student.annsandellhs.edu', '555-234-5680', '2008-07-08', 'female', '789 Maple Drive', 'Learning City', 'LC', '12347', 10, 3.78),
('STU2024004', 'James', 'Wilson', 'james.wilson@student.annsandellhs.edu', '555-234-5681', '2007-01-30', 'male', '321 Elm Street', 'Learning City', 'LC', '12348', 11, 3.65),
('STU2024005', 'Isabella', 'Brown', 'isabella.brown@student.annsandellhs.edu', '555-234-5682', '2008-09-12', 'female', '654 Cedar Lane', 'Learning City', 'LC', '12349', 10, 3.88),
('STU2024006', 'Alexander', 'Davis', 'alexander.davis@student.annsandellhs.edu', '555-234-5683', '2006-05-18', 'male', '987 Birch Road', 'Learning City', 'LC', '12350', 12, 3.95),
('STU2024007', 'Olivia', 'Garcia', 'olivia.garcia@student.annsandellhs.edu', '555-234-5684', '2009-02-25', 'female', '147 Spruce Street', 'Learning City', 'LC', '12351', 9, 3.72),
('STU2024008', 'William', 'Martinez', 'william.martinez@student.annsandellhs.edu', '555-234-5685', '2007-12-03', 'male', '258 Willow Avenue', 'Learning City', 'LC', '12352', 11, 3.81),
('STU2024009', 'Ava', 'Anderson', 'ava.anderson@student.annsandellhs.edu', '555-234-5686', '2008-04-14', 'female', '369 Poplar Drive', 'Learning City', 'LC', '12353', 10, 3.76),
('STU2024010', 'Ethan', 'Taylor', 'ethan.taylor@student.annsandellhs.edu', '555-234-5687', '2009-08-07', 'male', '741 Hickory Lane', 'Learning City', 'LC', '12354', 9, 3.69);

-- Insert parent/guardian information for sample students
INSERT INTO parents_guardians (student_id, first_name, last_name, relationship, email, phone, address, city, state, zip_code, is_primary_contact) VALUES
-- Emma Johnson's parents
((SELECT id FROM students WHERE student_id = 'STU2024001'), 'Robert', 'Johnson', 'father', 'robert.johnson@email.com', '555-234-5678', '123 Oak Street', 'Learning City', 'LC', '12345', TRUE),
((SELECT id FROM students WHERE student_id = 'STU2024001'), 'Lisa', 'Johnson', 'mother', 'lisa.johnson@email.com', '555-234-5679', '123 Oak Street', 'Learning City', 'LC', '12345', FALSE),

-- Michael Chen's parents
((SELECT id FROM students WHERE student_id = 'STU2024002'), 'David', 'Chen', 'father', 'david.chen@email.com', '555-234-5680', '456 Pine Avenue', 'Learning City', 'LC', '12346', TRUE),
((SELECT id FROM students WHERE student_id = 'STU2024002'), 'Maria', 'Chen', 'mother', 'maria.chen@email.com', '555-234-5681', '456 Pine Avenue', 'Learning City', 'LC', '12346', FALSE),

-- Sophia Rodriguez's parents
((SELECT id FROM students WHERE student_id = 'STU2024003'), 'Carlos', 'Rodriguez', 'father', 'carlos.rodriguez@email.com', '555-234-5682', '789 Maple Drive', 'Learning City', 'LC', '12347', TRUE),
((SELECT id FROM students WHERE student_id = 'STU2024003'), 'Ana', 'Rodriguez', 'mother', 'ana.rodriguez@email.com', '555-234-5683', '789 Maple Drive', 'Learning City', 'LC', '12347', FALSE),

-- James Wilson's parents
((SELECT id FROM students WHERE student_id = 'STU2024004'), 'Thomas', 'Wilson', 'father', 'thomas.wilson@email.com', '555-234-5684', '321 Elm Street', 'Learning City', 'LC', '12348', TRUE),
((SELECT id FROM students WHERE student_id = 'STU2024004'), 'Jennifer', 'Wilson', 'mother', 'jennifer.wilson@email.com', '555-234-5685', '321 Elm Street', 'Learning City', 'LC', '12348', FALSE),

-- Isabella Brown's parents
((SELECT id FROM students WHERE student_id = 'STU2024005'), 'Mark', 'Brown', 'father', 'mark.brown@email.com', '555-234-5686', '654 Cedar Lane', 'Learning City', 'LC', '12349', TRUE),
((SELECT id FROM students WHERE student_id = 'STU2024005'), 'Sarah', 'Brown', 'mother', 'sarah.brown@email.com', '555-234-5687', '654 Cedar Lane', 'Learning City', 'LC', '12349', FALSE);
