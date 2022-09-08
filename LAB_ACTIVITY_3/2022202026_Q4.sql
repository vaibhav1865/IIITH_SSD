select DEPT_LOCATIONS.Dnumber,Dname,count(*) AS "Number of locations" from DEPT_LOCATIONS,DEPARTMENT where DEPARTMENT.Dnumber=DEPT_LOCATIONS.Dnumber and DEPT_LOCATIONS.Dnumber = (select Dnumber from DEPARTMENT,DEPENDENT where Mgr_ssn=Essn AND Sex="F" group by Dnumber having count(*)>=2) group by DEPT_LOCATIONS.Dnumber;