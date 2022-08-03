-- SQLBook: Code
-- Deploy learnerr:learnerr_v1 to pg
BEGIN;

--~ Create domain
--& Vérification de l'email
CREATE DOMAIN EMAIL AS TEXT CHECK (
    -- VALUE ~ '^(?#email)[a-zA-Z0-9.-_]+@[\w-]+(?:\.[\w-]{2,4})$'
    VALUE ~ '^(?#email)[-a-zA-Z0-9.-_]+@[\w-]+(?:\.[\w-]{2,4})$'
);

--& Vérification du password
-- Minimum 8 caractères - comprenant au moins un chiffre, une minuscule, une majuscule, un caractère spécial minimum
CREATE DOMAIN PWD AS TEXT CHECK (
    VALUE ~ '^(?#password)(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z]).{8,}$'
);

--& Vérification de l'url
-- Source : https://stackoverflow.com/questions/3825676/postgresql-regex-word-boundaries
-- Postgres accepte \M pour 'boundaries end word' mais attention
-- Regex classique \b
CREATE DOMAIN LINK_URL AS TEXT CHECK (
    VALUE ~ '((https?:\/\/)|(www.))[a-zA-Z0-9.@:%._+~#=]{1,}.[-a-zA-Z0-9()]{1,}\.[-a-z]{1,6}\M'
);

--~ Create tables
CREATE TABLE IF NOT EXISTS "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" EMAIL NOT NULL UNIQUE,
    "password" PWD NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
    "title" TEXT NULL,
    "presentation" TEXT NULL,
    "profile_pic_url" LINK_URL NULL DEFAULT 'https://res.cloudinary.com/dkizcn12a/image/upload/v1659506766/logo_profile_pic_learnerr.png',
    "linkedin_url" LINK_URL NULL,
    "github_url" LINK_URL NULL,
    "instagram_url" LINK_URL NULL,
    "twitter_url" LINK_URL NULL,
    "portfolio_url" LINK_URL NULL,
    "role_id" INTEGER NOT NULL DEFAULT 3,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "error" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "error_snippet" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "error_comment_id" INTEGER NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "article_comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "error_comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "error_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "bad_word" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "word" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "status" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logo_svg" TEXT NULL
);

CREATE TABLE IF NOT EXISTS "error_has_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "error_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    UNIQUE ("error_id", "category_id")
);

CREATE TABLE IF NOT EXISTS "article_has_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "article_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    UNIQUE ("article_id", "category_id")
);

ALTER TABLE
    IF EXISTS "user"
ADD
    FOREIGN KEY ("role_id") REFERENCES "role" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;

ALTER TABLE
    IF EXISTS "article"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;

ALTER TABLE
    IF EXISTS "article"
ADD
    FOREIGN KEY ("status_id") REFERENCES "status" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;

ALTER TABLE
    IF EXISTS "error"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") 
    MATCH SIMPLE
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;

ALTER TABLE
    IF EXISTS "error"
ADD
    FOREIGN KEY ("status_id") REFERENCES status ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;

ALTER TABLE
    IF EXISTS "article_comment"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;
    
ALTER TABLE
    IF EXISTS "article_comment"
ADD
    FOREIGN KEY ("article_id") REFERENCES "article" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE CASCADE 
    NOT VALID;

ALTER TABLE
    IF EXISTS "error_comment"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") 
    MATCH SIMPLE
    ON UPDATE NO ACTION 
    ON DELETE NO ACTION 
    NOT VALID;
    
ALTER TABLE
    IF EXISTS "error_comment"
ADD
    FOREIGN KEY ("error_id") REFERENCES "error" ("id") 
    MATCH SIMPLE
    ON UPDATE NO ACTION 
    ON DELETE CASCADE 
    NOT VALID;

ALTER TABLE
    IF EXISTS "error_has_category"
ADD
    FOREIGN KEY ("error_id") REFERENCES "error" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE
    IF EXISTS "error_has_category"
ADD
    FOREIGN KEY ("category_id") REFERENCES "category" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE CASCADE 
    NOT VALID;

ALTER TABLE
    IF EXISTS "article_has_category"
ADD
    FOREIGN KEY ("article_id") REFERENCES "article" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE
    IF EXISTS "article_has_category"
ADD
    FOREIGN KEY ("category_id") REFERENCES "category" ("id") 
    MATCH SIMPLE 
    ON UPDATE NO ACTION 
    ON DELETE CASCADE 
    NOT VALID;

--~ Creates index
CREATE INDEX "user_brin_idx" ON "user" 
USING BRIN ("username", "email", "password");
CREATE INDEX "article_brin_idx" ON "article" 
USING BRIN ("title", "abstract", "content", "user_id");
CREATE INDEX "error_brin_idx" ON "error" 
USING BRIN ("title", "abstract", "content", "user_id", "error_comment_id");
CREATE INDEX "article_comment_brin_idx" ON "article_comment" 
USING BRIN ("content", "user_id", "article_id");
CREATE INDEX "error_comment_brin_idx" ON "error_comment" 
USING BRIN ("content", "user_id", "error_id");
CREATE INDEX "bad_word_brin_idx" ON "bad_word" 
USING BRIN ("word");
CREATE INDEX "category_brin_idx" ON "category" 
USING BRIN ("name");

COMMIT;