create table users(
	id SERIAL PRIMARY key,
  name varchar(30),
  age smallint,
  street varchar(50),
  neighborhood varchar(50),
  state char(2),
  bio varchar(200)
);