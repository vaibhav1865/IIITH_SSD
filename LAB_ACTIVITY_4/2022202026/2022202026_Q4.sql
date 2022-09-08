delimiter //  
CREATE PROCEDURE cust_details()  
BEGIN  
DECLARE d INT DEFAULT 0;  
DECLARE c_grade decimal;  
DECLARE c_name, c_city,c_country VARCHAR(20);  
  
DECLARE Get_cur CURSOR FOR SELECT CUST_NAME,CUST_CITY,CUST_COUNTRY,GRADE FROM customer where AGENT_CODE LIKE "A00%";  
DECLARE CONTINUE HANDLER FOR NOT FOUND SET d=1; 
open Get_cur;
lbl: LOOP  
FETCH Get_cur INTO c_name, c_city,c_country,c_grade;
select c_name, c_city,c_country,c_grade;
if d=1 then
LEAVE lbl; 
END IF;
END LOOP lbl;  
CLOSE Get_cur;  
END;  
// 

call cust_details();