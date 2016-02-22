use test1;

drop procedure if exists `mega_calc`;

create procedure `mega_calc`(in arg1 decimal, in arg2 decimal, out sum decimal)
set sum = arg1 + arg2;
