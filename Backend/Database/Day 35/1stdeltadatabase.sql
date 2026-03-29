show Databases;

create database collage;

#/ delete database
drop database collage;

create database collage;

use collage;

create table student(
roll_no INT,
name VARCHAR(20),
age INT);

insert into student values (11,'shrinath',25);

insert into student values (12,'shri',26);

insert into student values (13,'Virat',27);

insert into student values (14,'Kedar',28);

insert into student values (15,'virat',29);

select * from student;