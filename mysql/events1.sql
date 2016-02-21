use test1;

create table if not exists `mark_log` (
  msg varchar(20) not null,
  ts timestamp default current_timestamp on update current_timestamp
);

create event if not exists `mark_insert`
on schedule every 1 minute
do insert into `mark_log`(msg) values('== MARK ==');

-- alter event `mark_insert` disable; -- enable
