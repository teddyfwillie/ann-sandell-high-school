-- Insert staff members (leadership team and sample teachers)

INSERT INTO staff (employee_id, first_name, last_name, email, phone, position, department, hire_date, qualifications, bio, profile_image_url) VALUES
('EMP001', 'Sarah', 'Johnson', 'sjohnson@annsandellhs.edu', '555-123-4567', 'Principal', 'Administration', '2015-08-01', 'Ed.D. in Educational Leadership', 'Ed.D. in Educational Leadership with 15+ years in education. Passionate about student success and innovative teaching methods.', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('EMP002', 'David', 'Chen', 'dchen@annsandellhs.edu', '555-123-4568', 'Vice Principal', 'Administration', '2018-07-15', 'M.Ed. in Administration', 'M.Ed. in Administration, Former Mathematics Department Head. Specializes in curriculum development and student assessment.', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('EMP003', 'Emily', 'Rodriguez', 'erodriguez@annsandellhs.edu', '555-123-4569', 'Academic Director', 'Administration', '2017-08-20', 'M.A. in Curriculum Design', 'M.A. in Curriculum Design with 12 years teaching experience. Expert in personalized learning and academic excellence.', 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('EMP004', 'James', 'Wilson', 'jwilson@annsandellhs.edu', '555-123-4570', 'Dean of Students', 'Administration', '2019-06-10', 'M.S. in School Counseling', 'M.S. in School Counseling. Dedicated to student welfare, character development, and creating inclusive environments.', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('EMP005', 'Lisa', 'Anderson', 'landerson@annsandellhs.edu', '555-123-4571', 'Director of Arts & Sciences', 'Administration', '2016-08-15', 'Ph.D. in Educational Psychology', 'Ph.D. in Educational Psychology. Leader in integrating arts and sciences for comprehensive student development.', 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

('EMP006', 'Robert', 'Taylor', 'rtaylor@annsandellhs.edu', '555-123-4572', 'Athletic Director', 'Physical Education', '2020-07-01', 'M.Ed. in Physical Education', 'M.Ed. in Physical Education. Former college athlete with expertise in sports psychology and student-athlete development.', 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'),

-- Sample teachers
('EMP007', 'Michael', 'Thompson', 'mthompson@annsandellhs.edu', '555-123-4573', 'Mathematics Teacher', 'Mathematics', '2019-08-15', 'M.S. in Mathematics', 'Specializes in AP Calculus and advanced mathematics courses.', NULL),

('EMP008', 'Jennifer', 'Davis', 'jdavis@annsandellhs.edu', '555-123-4574', 'Science Teacher', 'Science', '2018-08-20', 'Ph.D. in Chemistry', 'Chemistry and AP Chemistry instructor with research background.', NULL),

('EMP009', 'Christopher', 'Brown', 'cbrown@annsandellhs.edu', '555-123-4575', 'English Teacher', 'English & Literature', '2017-08-25', 'M.A. in English Literature', 'AP Literature and composition instructor.', NULL),

('EMP010', 'Amanda', 'Garcia', 'agarcia@annsandellhs.edu', '555-123-4576', 'History Teacher', 'Social Studies', '2020-08-10', 'M.A. in History', 'World History and AP US History teacher.', NULL);

-- Update department heads
UPDATE departments SET head_of_department_id = (SELECT id FROM staff WHERE employee_id = 'EMP007') WHERE name = 'Mathematics';
UPDATE departments SET head_of_department_id = (SELECT id FROM staff WHERE employee_id = 'EMP008') WHERE name = 'Science';
UPDATE departments SET head_of_department_id = (SELECT id FROM staff WHERE employee_id = 'EMP009') WHERE name = 'English & Literature';
UPDATE departments SET head_of_department_id = (SELECT id FROM staff WHERE employee_id = 'EMP010') WHERE name = 'Social Studies';
