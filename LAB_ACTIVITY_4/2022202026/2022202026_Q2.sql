DELIMITER //

CREATE PROCEDURE GET_FNAME(IN cityname varchar(20))
BEGIN
		SELECT CUST_NAME FROM customer where WORKING_AREA=cityname ;
END // 

DELIMITER ;

call GET_FNAME('Bangalore');
