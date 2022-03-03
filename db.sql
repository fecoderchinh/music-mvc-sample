create database mvc;
use mvc;

create table music(
	id bigint not null auto_increment,
	name varchar(250) not null,
	singer varchar(250) not null,
	category varchar(250) not null,
	album varchar(250) not null,
	year year(4) not null,
	primary key (id)
);

-- drop table music;

INSERT INTO music (name, singer, category, album, year) VALUES
('THE PLAYAH', 'Soobin x SlimV', 'Special Performance', 'Soobin 1', 2021),
('Trốn Tim', 'Đen ft. MTV Band', 'Rap', 'Đen 1', 2021);