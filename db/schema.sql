drop database if exists corequery_db;
create DATABASE corequery_db;


\connect corequery_db;

--'create' 'table' postgress keywords
create table questions(

-- allows program to generate next whole number, commonly used for primary key ID columns
	question_id SERIAL,

--VARCHAR stores text with a maxiumun length eg(50)
--NOT NULL requires a value
	question TEXT not null,

-- PRIMARY KEY marks the column that uniquely identifies each row.
	primary key (question_id)

);

create table choices(

	id SERIAL PRIMARY KEY,

	--references question number
	question_id
	
	choice_text TEXT not null,
	
	
--from questions table	
	question_id INT not null,
	
	PRIMARY KEY (choice_id),
	
--foreign key links tables -relational database-
--references says every child _id must match parent _id	
--foreign key references column/row NOT table
	
	FOREIGN KEY (question_id) REFERENCES question(id)(question_id)

-- if id is deleted, deleting this row triggers automatic deletion of dependent rows elsewhere	
	ON DELETE CASCADE	
	
);

INSERT INTO questions (question, correct_answer)
VALUES
(
'Who is considered the father of computer science?',
'a. Alan Turing'
),
(
'What year was the first computer bug discovered?',
'a. 1945'
),
(
'Who was the first Black woman to earn a PhD in computer science?',
'd. Shirley Ann Jackson'
);

INSERT INTO choices (question_id, choice_text)
VALUES
(1, 'a. Alan Turing'),
(1, 'b. Bill Gates'),
(1, 'c. Steve Jobs'),
(1, 'd. Ada Lovelace');

INSERT INTO choices (question_id, choice_text)
VALUES
(2, 'a. 1945'),
(2, 'b. 1951'),
(2, 'c. 1937'),
(2, 'd. 1965');

INSERT INTO choices (question_id, choice_text)
VALUES
(3, 'a. Kimberly Bryant'),
(3, 'b. Grace Hopper'),
(3, 'c. Joy Buolamwini'),
(3, 'd. Shirley Ann Jackson');