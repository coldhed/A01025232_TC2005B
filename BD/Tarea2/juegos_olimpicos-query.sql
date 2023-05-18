-- Apellidos y nombre de los participantes de nacionalidad mexicana.
SELECT nombre, apellidos FROM DEPORTISTA
WHERE pais LIKE 'Mexico';

-- Apellidos, nombre y puntos acumulados de los participantes de USA.
SELECT DEPORTISTA.nombre, DEPORTISTA.apellidos, CLASIFICACION.rango as lugar
FROM DEPORTISTA INNER JOIN CLASIFICACION
ON DEPORTISTA.matricula = CLASIFICACION.deportista
WHERE DEPORTISTA.pais LIKE 'Estados Unidos';

-- Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
SELECT DISTINCT DEPORTISTA.nombre, DEPORTISTA.apellidos
FROM DEPORTISTA INNER JOIN CLASIFICACION
ON DEPORTISTA.matricula = CLASIFICACION.deportista
WHERE CLASIFICACION.rango = 1;

-- Nombre de las competencias en las que intervinieron los participantes mexicanos.
SELECT DISTINCT DISCIPLINA.nombre
FROM (((DEPORTISTA INNER JOIN CLASIFICACION ON DEPORTISTA.matricula = CLASIFICACION.deportista)
INNER JOIN PRUEBA ON CLASIFICACION.prueba = PRUEBA.identificador)
INNER JOIN DISCIPLINA ON PRUEBA.disciplina = DISCIPLINA.identificador)
WHERE DEPORTISTA.pais LIKE 'Mexico';

-- Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
SELECT nombre, apellidos FROM DEPORTISTA
WHERE DEPORTISTA.matricula NOT IN (
	SELECT DISTINCT DEPORTISTA.matricula
	FROM DEPORTISTA INNER JOIN CLASIFICACION
	ON DEPORTISTA.matricula = CLASIFICACION.deportista
	WHERE CLASIFICACION.rango = 1);
    
-- Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
SELECT DISTINCT DEPORTISTA.nombre, DEPORTISTA.apellidos FROM
DEPORTISTA INNER JOIN CLASIFICACION ON DEPORTISTA.matricula = CLASIFICACION.deportista;

-- Nombre de la competencia que aporta el máximo de puntos. 

-- bajo nuestro nuevo esquema, las competencias no otorgan puntos, sino medallas
-- y todas las competencias otorgan las mismas tres medallas, por lo que no hay una manera
-- de calcular el maximo. para calcular el maximo se podria hacer uso de MAX()

-- Países (nacionalidades) que participaron en todas las competencias.
SELECT PAIS.nombre FROM PAIS
WHERE PAIS.nombre NOT IN ( -- seleccionar paises que no esten en la lista de los paises que no participaron en una competencia
	SELECT DISTINCT pais
	FROM (SELECT PAIS.nombre AS pais, DISCIPLINA.nombre AS competencia
	FROM PAIS, DISCIPLINA) AS paisCompCartesiano -- todas las posibilidades de los paies y competencias
	WHERE NOT EXISTS -- paisCompCartesiano - competencias en la que los paises sí participaron = competencias en las que no participaron
		(SELECT 1 -- SELECT 1 -> NOT EXISTS | competencias en las que los paises sí participaron
		FROM DEPORTISTA
		INNER JOIN CLASIFICACION ON DEPORTISTA.matricula = CLASIFICACION.deportista
		INNER JOIN PRUEBA ON CLASIFICACION.prueba = PRUEBA.identificador
		INNER JOIN DISCIPLINA ON PRUEBA.disciplina = DISCIPLINA.identificador
		WHERE DEPORTISTA.pais = paisCompCartesiano.pais
		AND DISCIPLINA.nombre = paisCompCartesiano.competencia
        )
	);

-- Porpongan una consulta que involucre una sola tabla con  alguna funcion como MIN, AVG --- Nueva consulta

-- número promedio de participantes por prueba
SELECT AVG(PRUEBA.num_par) FROM PRUEBA;

-- Porpongan una consulta que involucre dos tabla con GROUP BY --- Nueva consulta
SELECT DISCIPLINA.nombre, DISCIPLINA.disciplina, COUNT(PRUEBA.disciplina)
FROM DISCIPLINA LEFT JOIN PRUEBA ON DISCIPLINA.identificador = PRUEBA.disciplina
GROUP BY DISCIPLINA.disciplina, DISCIPLINA.nombre;


-- Porpongan una consulta que involucre tres tablas con las sentencias LEFT JOIN, ORDER BY, GROUP BY Y LIMIT--- Nueva consulta
SELECT 
	DEPORTISTA.matricula, 
    DEPORTISTA.nombre, 
    PRUEBA.naturaleza, 
    COUNT(DISTINCT CLASIFICACION.deportista, CLASIFICACION.prueba) AS num
FROM DEPORTISTA LEFT JOIN CLASIFICACION ON DEPORTISTA.matricula = CLASIFICACION.deportista
INNER JOIN PRUEBA ON CLASIFICACION.prueba = PRUEBA.identificador
GROUP BY DEPORTISTA.matricula, DEPORTISTA.nombre, PRUEBA.naturaleza
ORDER BY num DESC
LIMIT 3;

-- Porpongan una consulta que involucre tres tablas con las sentencias INNER JOIN y LIKE
SELECT DEPORTISTA.nombre, DISCIPLINA.nombre AS disciplina_eliminatioria FROM DEPORTISTA 
INNER JOIN CLASIFICACION ON DEPORTISTA.matricula = CLASIFICACION.deportista
INNER JOIN PRUEBA ON CLASIFICACION.prueba = PRUEBA.identificador
INNER JOIN DISCIPLINA ON PRUEBA.disciplina = DISCIPLINA.identificador
WHERE PRUEBA.naturaleza LIKE 'eliminatoria'
ORDER BY DEPORTISTA.nombre;