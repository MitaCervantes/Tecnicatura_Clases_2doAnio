--Consulta informacion seleccionada
SELECT * FROM persona WHERE id_persona in (1,2,3);
--Ingresamos un nuevo elemento a la tabla
INSERT INTO persona(nombre, apellido,email) VALUES ('Susana', 'Lara', 'slara@mail.com');
--Hacemos la consulta para ver todo los elementos de la tabla
SELECT * FROM persona;

UPDATE persona SET nombre = 'Ivone' , apellido = 'Esparza', email = 'iesparza@mail.com' WHERE id_persona = 3;

DELETE FROM persona WHERE id_persona = 3;