DROP TABLE IF EXISTS choices;
DROP TABLE IF EXISTS user_achievements;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS terms_acceptance;
DROP TABLE IF EXISTS consent;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;

create table questions(
	question_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

	question TEXT not null

);


create table choices(

	choice_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,


	question_id INTEGER NOT NULL
        REFERENCES questions(question_id)
        ON DELETE RESTRICT,
	
	choice_text TEXT not null,
	is_correct BOOLEAN not null
		
);

INSERT INTO questions (question)
VALUES
(
'Who is considered the father of computer science?'
),
(
'What year was the first computer bug discovered?'
),
(
'Who was the first Black woman to earn a PhD in computer science?'
);

INSERT INTO choices (question_id, choice_text, is_correct)
VALUES
(1, 'a. Alan Turing', true),
(1, 'b. Bill Gates', false),
(1, 'c. Steve Jobs', false),
(1, 'd. Ada Lovelace', false);


INSERT INTO choices (question_id, choice_text, is_correct)
VALUES
(2, 'a. 1945', true),
(2, 'b. 1951', false),
(2, 'c. 1937', false),
(2, 'd. 1965', false);

INSERT INTO choices (question_id, choice_text, is_correct)
VALUES
(3, 'a. Kimberly Bryant', false),
(3, 'b. Grace Hopper', false),
(3, 'c. Joy Buolamwini', false),
(3, 'd. Shirley Ann Jackson', true);

CREATE TABLE users (
    user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    username VARCHAR (30) NOT NULL UNIQUE,
    email VARCHAR (255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    totp_secret VARCHAR(32),
    totp_enabled BOOLEAN NOT NULL,
    failed_login_attempts INTEGER NOT NULL, 
    locked_until TIMESTAMPTZ, 
    email_verified BOOLEAN NOT NULL,
    is_active BOOLEAN NOT NULL,
    created_at TIMESTAMPTZ NOT NULL, 
    updated_at TIMESTAMPTZ NOT NULL
);
CREATE TABLE subscriptions (
    subscription_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(user_id)
        ON DELETE RESTRICT,

    tier VARCHAR(30) NOT NULL,

    started_at TIMESTAMPTZ NOT NULL,
    ended_at TIMESTAMPTZ,

    canceled_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE terms_versions (
    terms_version_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    version VARCHAR(20) NOT NULL UNIQUE,

    terms_content TEXT NOT NULL,

    effective_at TIMESTAMPTZ NOT NULL,

    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE terms_acceptance (
    terms_acceptance_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(user_id)
        ON DELETE RESTRICT,

    terms_version_id INTEGER NOT NULL
        REFERENCES terms_versions(terms_version_id)
        ON DELETE RESTRICT,

    accepted_at TIMESTAMPTZ NOT NULL,

    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL,

    UNIQUE (user_id, terms_version_id)
);

CREATE TABLE user_achievements (
    user_achievement_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(user_id)
        ON DELETE RESTRICT,

    badge_type VARCHAR(30) NOT NULL,

    question_id INTEGER
        REFERENCES questions(question_id)
        ON DELETE RESTRICT,

    earned_at TIMESTAMPTZ NOT NULL,

    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
);