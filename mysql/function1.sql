use test1;

drop function if exists yesterday;

delimiter $$
create function `yesterday`()
returns datetime
begin
  declare yesterday_date datetime;
  set yesterday_date = subdate(current_date, 1);
  return yesterday_date;
end$$
delimiter ;
