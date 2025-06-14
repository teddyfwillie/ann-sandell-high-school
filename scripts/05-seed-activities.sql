-- Insert extracurricular activities

INSERT INTO activities (name, type, description, meeting_schedule, max_participants) VALUES
-- Academic clubs
('National Honor Society', 'academic', 'Recognition society for outstanding academic achievement and character', 'Monthly meetings', 50),
('Math Team', 'academic', 'Competitive mathematics team participating in regional competitions', 'Weekly after school', 20),
('Science Olympiad', 'academic', 'Science competition team covering various STEM disciplines', 'Twice weekly after school', 25),
('Debate Team', 'academic', 'Competitive debate and public speaking team', 'Daily after school', 15),
('Model United Nations', 'academic', 'Simulation of UN proceedings and international diplomacy', 'Weekly meetings', 30),
('Academic Decathlon', 'academic', 'Multi-subject academic competition team', 'Daily after school', 12),
('Quiz Bowl', 'academic', 'Academic trivia competition team', 'Weekly practice', 15),

-- Arts activities
('Drama Club', 'arts', 'Theater productions and dramatic performances', 'Daily during production season', 40),
('Art Club', 'arts', 'Visual arts projects and exhibitions', 'Weekly after school', 25),
('Photography Club', 'arts', 'Digital photography and darkroom techniques', 'Weekly meetings', 20),
('Creative Writing Club', 'arts', 'Poetry, fiction, and literary magazine publication', 'Bi-weekly meetings', 20),
('Jazz Ensemble', 'arts', 'Advanced instrumental jazz performance group', 'Daily during music period', 15),
('Marching Band', 'arts', 'Competitive marching band and field shows', 'Daily practice, weekend competitions', 60),

-- Sports
('Varsity Basketball', 'sport', 'Competitive basketball team', 'Daily practice, games twice weekly', 15),
('Varsity Soccer', 'sport', 'Competitive soccer team', 'Daily practice, games twice weekly', 22),
('Track and Field', 'sport', 'Individual and team track and field events', 'Daily practice, weekend meets', 40),
('Swimming Team', 'sport', 'Competitive swimming and diving', 'Daily practice, weekly meets', 25),
('Tennis Team', 'sport', 'Varsity tennis team', 'Daily practice, matches twice weekly', 12),
('Cross Country', 'sport', 'Long-distance running team', 'Daily practice, weekend meets', 20),
('Volleyball', 'sport', 'Competitive volleyball team', 'Daily practice, games twice weekly', 12),

-- Service clubs
('Key Club', 'service', 'Community service and leadership development', 'Weekly meetings', 40),
('National Honor Society Service', 'service', 'Community service projects and volunteer coordination', 'Monthly service projects', 30),
('Environmental Club', 'service', 'Environmental awareness and conservation projects', 'Bi-weekly meetings', 25),
('Peer Tutoring', 'service', 'Student-to-student academic support program', 'Flexible scheduling', 50),

-- Other clubs
('Student Government', 'other', 'Student body representation and school governance', 'Weekly meetings', 20),
('Yearbook Committee', 'other', 'School yearbook creation and publication', 'Daily during journalism period', 15),
('School Newspaper', 'other', 'Student newspaper writing and publication', 'Weekly meetings', 20),
('Chess Club', 'other', 'Chess strategy and tournament play', 'Weekly meetings', 20),
('Robotics Team', 'other', 'Engineering and programming of competitive robots', 'Daily after school', 15),
('Future Business Leaders', 'other', 'Business skills and entrepreneurship development', 'Bi-weekly meetings', 25);
