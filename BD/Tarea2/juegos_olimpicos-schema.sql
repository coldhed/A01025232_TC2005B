DROP SCHEMA IF EXISTS juegos_olimpicos;
CREATE SCHEMA juegos_olimpicos;
USE juegos_olimpicos;

--
-- Table structure for table `PAIS`
--
CREATE TABLE PAIS (
	nombre VARCHAR(50) NOT NULL,
    num_part INT UNSIGNED NOT NULL,
    num_med INT UNSIGNED NOT NULL,
    PRIMARY KEY (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `DEPORTISTA`
--
CREATE TABLE DEPORTISTA (
	matricula VARCHAR(20) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    PRIMARY KEY (matricula),
    CONSTRAINT `fk_DEPORTISTA_PAIS` FOREIGN KEY (pais) REFERENCES PAIS(nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `DISCIPLINA`
--
CREATE TABLE DISCIPLINA (
	identificador INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    disciplina VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `PRUEBA`
--
CREATE TABLE PRUEBA (
	identificador INT UNSIGNED NOT NULL AUTO_INCREMENT,
    disciplina INT UNSIGNED NOT NULL,
    fecha DATE NOT NULL,
    lugar VARCHAR(50) NOT NULL,
    num_par INT UNSIGNED NOT NULL,
    naturaleza VARCHAR(20) NOT NULL,
    PRIMARY KEY (identificador),
    CONSTRAINT `fk_PRUEBA_DISCIPLINA` FOREIGN KEY (disciplina) REFERENCES DISCIPLINA(identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `CLASIFICACION`
--
CREATE TABLE CLASIFICACION (
	deportista VARCHAR(20) NOT NULL,
    prueba INT UNSIGNED NOT NULL,
    rango INT NOT NULL,
    PRIMARY KEY (deportista, prueba),
    CONSTRAINT `fk_CLASIFICACION_DEPORTISTA` FOREIGN KEY (deportista) REFERENCES DEPORTISTA(matricula),
    CONSTRAINT `fk_CLASIFICACION_PRUEBA` FOREIGN KEY (prueba) REFERENCES  PRUEBA(identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `RESULTADO`
--
CREATE TABLE RESULTADO (
	disciplina INT UNSIGNED NOT NULL,
    oro VARCHAR(20) NOT NULL,
    plata VARCHAR(20) NOT NULL,
    bronce VARCHAR(20) NOT NULL,
    PRIMARY KEY (disciplina),
    CONSTRAINT `fk_RESULTADO_DISCIPLINA` FOREIGN KEY (disciplina) REFERENCES DISCIPLINA(identificador),
    CONSTRAINT `fk_RESULTADO_DEPORTISTA_ORO` FOREIGN KEY (oro) REFERENCES DEPORTISTA(matricula),
    CONSTRAINT `fk_RESULTADO_DEPORTISTA_PLATA` FOREIGN KEY (plata) REFERENCES DEPORTISTA(matricula),
    CONSTRAINT `fk_RESULTADO_DEPORTISTA_BRONCE` FOREIGN KEY (bronce) REFERENCES DEPORTISTA(matricula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;