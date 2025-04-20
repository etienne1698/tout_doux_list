CREATE TABLE "project_user" (
	"project_id" integer,
	"user_id" integer,
	CONSTRAINT "project_user_project_id_user_id_pk" PRIMARY KEY("project_id","user_id")
);
