use test1;

create table if not exists `triggers1` (
  `id` int(11) not null auto_increment,
  `data` varchar(50) default 'some text',
  `created_at` datetime default current_timestamp,
  `action` enum('create', 'update'),
  primary key (`id`)
);

drop trigger if exists `bi_triggers1`;
create trigger `bi_triggers1` before insert
on `triggers1` for each row
set new.`action` = 'create';

drop trigger if exists `bu_triggers1`;
create trigger `bu_triggers1` before update
on `triggers1` for each row
set new.`action` = 'update';
