DELIMITER //

CREATE PROCEDURE ADDn(IN num1 INT,IN num2 INT)
BEGIN
      select num1+num2;
END // 

DELIMITER ;

call ADDn(5,4);