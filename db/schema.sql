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

	choice_id SERIAL,
	
	choice TEXT not null,
	
	
--from questions table	
	question_id INT not null,
	
	primary key (choice_id),
	
--foreign key links tables -relational database-
--references says every child _id must match parent _id	
	
	foreign key (question_id) references questions(question_id)
	
	
	
);