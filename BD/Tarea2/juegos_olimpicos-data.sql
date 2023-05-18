USE juegos_olimpicos;

-- PAIS (nombre, num_part, num_med)
INSERT INTO PAIS VALUES
("México", 12, 6),
("Estados Unidos", 30, 55),
("China", 28, 42),
("Reino Unido", 16, 31),
("Canada", 10, 4);

-- DEPORTISTA (matricula, nombre, apellidos, sexo, pais)
INSERT INTO DEPORTISTA VALUES
("A01", "Mariel", "Gomez", "F", "México"),
("A02", "Santiago", "Rodríguez", "M", "Estados Unidos"),
("A03", "Zhou", "Guanyu", "M", "China"),
("A04", "Charlotte", "Williamson", "F", "Reino Unido"),
("A05", "Justin", "Trudeau", "M", "Canada");

-- DISCIPLINA (identificador, nombre, disciplina)
INSERT INTO DISCIPLINA (nombre, disciplina) VALUES
("400m nado libre", "natación"),
("800m nado libre", "natación"),
("400m medley individual", "natación"),
("100m planos", "atletismo"),
("400m planos", "atletismo");

-- PRUEBA (identificador, disciplina, fecha, lugar, num_par, naturaleza)
INSERT INTO PRUEBA (disciplina, fecha, lugar, num_par, naturaleza) VALUES
(1, '2022-07-10', "alberca A", 8, "eliminatoria"),
(1, '2022-07-13', "alberca A", 8, "final"),
(3, '2022-07-09', "alberca B", 8, "eliminatoria"),
(4, '2022-07-05', "pista C", 9, "eliminatoria"),
(4, '2022-07-14', "pista A", 6, "final"),
(2, '2022-07-10', "alberca B", 8, "eliminatoria"),
(5, '2022-07-09', "pista B", 8, "eliminatoria");

-- CLASIFICACION (deportista, prueba, rango)
INSERT INTO CLASIFICACION VALUES
("A01", 2, 1),
("A01", 1, 8),
("A01", 3, 8),
("A01", 4, 8),
("A01", 5, 6),
("A01", 6, 8),
("A01", 7, 8),
("A03", 4, 2),
("A03", 5, 1),
("A02", 5, 4),
("A05", 4, 3);

-- RESULTADO (disciplina, oro, plata, bronce)
INSERT INTO RESULTADO VALUES
(1, "A01", "A04", "A03"),
(2, "A02", "A05", "A01"),
(3, "A05", "A02", "A04"),
(4, "A03", "A05", "A04"),
(5, "A02", "A01", "A04");