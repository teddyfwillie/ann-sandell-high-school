-- Insert courses for each department

-- Mathematics courses
INSERT INTO courses (course_code, name, description, department_id, grade_level, credits, is_ap_course, is_honors_course) VALUES
('MATH101', 'Algebra I', 'Fundamental algebraic concepts and problem-solving skills', (SELECT id FROM departments WHERE name = 'Mathematics'), 9, 1.0, FALSE, FALSE),
('MATH102', 'Geometry', 'Plane and solid geometry with emphasis on proofs and applications', (SELECT id FROM departments WHERE name = 'Mathematics'), 9, 1.0, FALSE, FALSE),
('MATH201', 'Algebra II', 'Advanced algebraic concepts including polynomials and functions', (SELECT id FROM departments WHERE name = 'Mathematics'), 10, 1.0, FALSE, FALSE),
('MATH202', 'Pre-Calculus', 'Preparation for calculus including trigonometry and advanced functions', (SELECT id FROM departments WHERE name = 'Mathematics'), 11, 1.0, FALSE, TRUE),
('MATH301', 'AP Calculus AB', 'College-level calculus covering limits, derivatives, and integrals', (SELECT id FROM departments WHERE name = 'Mathematics'), 12, 1.0, TRUE, FALSE),
('MATH302', 'AP Calculus BC', 'Advanced calculus including series and advanced integration techniques', (SELECT id FROM departments WHERE name = 'Mathematics'), 12, 1.0, TRUE, FALSE),
('MATH303', 'AP Statistics', 'Statistical analysis and probability for college credit', (SELECT id FROM departments WHERE name = 'Mathematics'), 11, 1.0, TRUE, FALSE),

-- Science courses
('SCI101', 'Biology', 'Introduction to life sciences and biological processes', (SELECT id FROM departments WHERE name = 'Science'), 9, 1.0, FALSE, FALSE),
('SCI102', 'Chemistry', 'Fundamental principles of chemistry and laboratory techniques', (SELECT id FROM departments WHERE name = 'Science'), 10, 1.0, FALSE, FALSE),
('SCI103', 'Physics', 'Classical mechanics, electricity, and magnetism', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, FALSE, FALSE),
('SCI201', 'AP Biology', 'College-level biology with extensive laboratory work', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, TRUE, FALSE),
('SCI202', 'AP Chemistry', 'Advanced chemistry concepts and quantitative analysis', (SELECT id FROM departments WHERE name = 'Science'), 11, 1.0, TRUE, FALSE),
('SCI203', 'AP Physics 1', 'Algebra-based physics covering mechanics and waves', (SELECT id FROM departments WHERE name = 'Science'), 12, 1.0, TRUE, FALSE),
('SCI204', 'Environmental Science', 'Study of environmental systems and human impact', (SELECT id FROM departments WHERE name = 'Science'), 12, 1.0, FALSE, FALSE),

-- English & Literature courses
('ENG101', 'English I', 'Fundamentals of reading, writing, and literary analysis', (SELECT id FROM departments WHERE name = 'English & Literature'), 9, 1.0, FALSE, FALSE),
('ENG102', 'English II', 'World literature and advanced composition skills', (SELECT id FROM departments WHERE name = 'English & Literature'), 10, 1.0, FALSE, FALSE),
('ENG201', 'English III', 'American literature and rhetorical analysis', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 1.0, FALSE, FALSE),
('ENG202', 'English IV', 'British literature and advanced writing techniques', (SELECT id FROM departments WHERE name = 'English & Literature'), 12, 1.0, FALSE, FALSE),
('ENG301', 'AP Literature', 'College-level literary analysis and critical writing', (SELECT id FROM departments WHERE name = 'English & Literature'), 12, 1.0, TRUE, FALSE),
('ENG302', 'AP Language', 'Advanced composition and rhetorical analysis', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 1.0, TRUE, FALSE),
('ENG303', 'Creative Writing', 'Fiction, poetry, and creative non-fiction writing', (SELECT id FROM departments WHERE name = 'English & Literature'), 11, 0.5, FALSE, FALSE),

-- Social Studies courses
('SS101', 'World History', 'Survey of world civilizations and cultures', (SELECT id FROM departments WHERE name = 'Social Studies'), 9, 1.0, FALSE, FALSE),
('SS102', 'US History', 'American history from colonial times to present', (SELECT id FROM departments WHERE name = 'Social Studies'), 10, 1.0, FALSE, FALSE),
('SS201', 'AP World History', 'College-level world history with thematic approach', (SELECT id FROM departments WHERE name = 'Social Studies'), 10, 1.0, TRUE, FALSE),
('SS202', 'AP US History', 'Advanced study of American history and historiography', (SELECT id FROM departments WHERE name = 'Social Studies'), 11, 1.0, TRUE, FALSE),
('SS203', 'Government', 'American government and political systems', (SELECT id FROM departments WHERE name = 'Social Studies'), 12, 0.5, FALSE, FALSE),
('SS204', 'Economics', 'Principles of micro and macroeconomics', (SELECT id FROM departments WHERE name = 'Social Studies'), 12, 0.5, FALSE, FALSE),
('SS205', 'Psychology', 'Introduction to psychological principles and research', (SELECT id FROM departments WHERE name = 'Social Studies'), 11, 0.5, FALSE, FALSE),

-- Technology courses
('TECH101', 'Computer Science Fundamentals', 'Introduction to programming and computational thinking', (SELECT id FROM departments WHERE name = 'Technology'), 9, 1.0, FALSE, FALSE),
('TECH201', 'AP Computer Science A', 'Java programming and object-oriented design', (SELECT id FROM departments WHERE name = 'Technology'), 11, 1.0, TRUE, FALSE),
('TECH202', 'Web Development', 'HTML, CSS, JavaScript, and web design principles', (SELECT id FROM departments WHERE name = 'Technology'), 10, 1.0, FALSE, FALSE),
('TECH203', 'Robotics', 'Engineering design and programming of robotic systems', (SELECT id FROM departments WHERE name = 'Technology'), 11, 1.0, FALSE, FALSE),

-- Fine Arts courses
('ART101', 'Drawing & Painting I', 'Fundamental drawing and painting techniques', (SELECT id FROM departments WHERE name = 'Fine Arts'), 9, 1.0, FALSE, FALSE),
('ART102', 'Drawing & Painting II', 'Advanced studio art and portfolio development', (SELECT id FROM departments WHERE name = 'Fine Arts'), 10, 1.0, FALSE, FALSE),
('ART201', 'AP Studio Art', 'College-level studio art with portfolio submission', (SELECT id FROM departments WHERE name = 'Fine Arts'), 11, 1.0, TRUE, FALSE),
('ART202', 'Digital Art', 'Computer graphics and digital media creation', (SELECT id FROM departments WHERE name = 'Fine Arts'), 10, 1.0, FALSE, FALSE),
('ART203', 'Photography', 'Digital photography and image editing techniques', (SELECT id FROM departments WHERE name = 'Fine Arts'), 11, 0.5, FALSE, FALSE),

-- Performing Arts courses
('MUS101', 'Concert Band', 'Instrumental ensemble performance and music theory', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),
('MUS102', 'Concert Choir', 'Vocal ensemble and choral music performance', (SELECT id FROM departments WHERE name = 'Performing Arts'), 9, 1.0, FALSE, FALSE),
('MUS201', 'AP Music Theory', 'Advanced music theory and composition', (SELECT id FROM departments WHERE name = 'Performing Arts'), 11, 1.0, TRUE, FALSE),
('THEA101', 'Theater Arts', 'Acting, stagecraft, and dramatic literature', (SELECT id FROM departments WHERE name = 'Performing Arts'), 10, 1.0, FALSE, FALSE),

-- Physical Education courses
('PE101', 'Physical Education I', 'Fitness, sports skills, and health education', (SELECT id FROM departments WHERE name = 'Physical Education'), 9, 1.0, FALSE, FALSE),
('PE102', 'Physical Education II', 'Advanced fitness and lifetime sports', (SELECT id FROM departments WHERE name = 'Physical Education'), 10, 1.0, FALSE, FALSE),
('PE201', 'Health Education', 'Personal health, nutrition, and wellness', (SELECT id FROM departments WHERE name = 'Physical Education'), 11, 0.5, FALSE, FALSE),
('PE202', 'Sports Medicine', 'Athletic training and sports injury prevention', (SELECT id FROM departments WHERE name = 'Physical Education'), 12, 1.0, FALSE, FALSE),

-- Foreign Language courses
('SPAN101', 'Spanish I', 'Introduction to Spanish language and culture', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 9, 1.0, FALSE, FALSE),
('SPAN102', 'Spanish II', 'Intermediate Spanish communication skills', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 10, 1.0, FALSE, FALSE),
('SPAN201', 'Spanish III', 'Advanced Spanish grammar and literature', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 11, 1.0, FALSE, FALSE),
('SPAN301', 'AP Spanish', 'College-level Spanish language and culture', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 12, 1.0, TRUE, FALSE),
('FREN101', 'French I', 'Introduction to French language and culture', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 9, 1.0, FALSE, FALSE),
('FREN102', 'French II', 'Intermediate French communication skills', (SELECT id FROM departments WHERE name = 'Foreign Languages'), 10, 1.0, FALSE, FALSE);
