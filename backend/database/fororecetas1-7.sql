-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fororecetas
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria-recetas`
--

DROP TABLE IF EXISTS `categoria-recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria-recetas` (
  `idcategoria-recetas` int NOT NULL,
  `id-categoria` int NOT NULL,
  `id-recetas` int NOT NULL,
  PRIMARY KEY (`idcategoria-recetas`),
  KEY `id-categoria_idx` (`id-categoria`),
  KEY `id-recetas_idx` (`id-recetas`),
  CONSTRAINT `id-categoria` FOREIGN KEY (`id-categoria`) REFERENCES `categorias` (`idcategoria`),
  CONSTRAINT `id-recetas` FOREIGN KEY (`id-recetas`) REFERENCES `recetas` (`idreceta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria-recetas`
--

LOCK TABLES `categoria-recetas` WRITE;
/*!40000 ALTER TABLE `categoria-recetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria-recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `nombre` varchar(45) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `idfavoritos` int NOT NULL AUTO_INCREMENT,
  `id-recetas-fav` int NOT NULL,
  `id-usuarios-fav` int NOT NULL,
  PRIMARY KEY (`idfavoritos`),
  KEY `id-recetas_idx` (`id-recetas-fav`),
  KEY `id-usuarios_idx` (`id-usuarios-fav`),
  CONSTRAINT `id-recetas-fav` FOREIGN KEY (`id-recetas-fav`) REFERENCES `recetas` (`idreceta`),
  CONSTRAINT `id-usuarios-fav` FOREIGN KEY (`id-usuarios-fav`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `idreceta` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `subtitulo` varchar(200) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `pasos` text NOT NULL,
  `ingredientes` text NOT NULL,
  `idusuario` int NOT NULL,
  PRIMARY KEY (`idreceta`),
  KEY `id-recetas-usuario_idx` (`idusuario`),
  CONSTRAINT `id-recetas-usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Sandwich de Jamón y Cheddar','Delicioso y fácil de preparar','/images/recetas/sandwich.png','1. Cortar el pan. 2. Colocar jamón y queso cheddar. 3. Calentar en la plancha.','Pan, Jamón, Queso Cheddar',1),(2,'Pizza Margarita','Clásica y sabrosa','/images/recetas/pizza.jpg','1. Preparar la masa. 2. Añadir salsa de tomate. 3. Colocar mozzarella y albahaca. 4. Hornear a 220°C por 15 minutos.','Masa, Salsa de Tomate, Mozzarella, Albahaca',2),(5,'Ravioles de Espinaca','Pasta fresca rellena de espinaca y ricota','/images/recetas/ravioles.jpeg','preparar la masa de pasta, hacer el relleno de espinaca y ricota, formar los ravioles, cocinar en agua hirviendo por 3 minutos','Harina, Espinaca, Ricota, Huevos',3);
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `biografia` varchar(150) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan Pérez','juan.perez@example.com','contraseña123','Desarrollador de software con 5 años de experiencia.','/images/usuarios/user2.jpg'),(2,'María García','maria.garcia@example.com','segura456','Diseñadora gráfica apasionada por el arte digital.','/images/usuarios/user1.jpg'),(3,'Carlos Sánchez','carlos.sanchez@example.com','clave789','Ingeniero de datos especializado en big data.','/images/usuarios/user4.jpg'),(4,'Ana López','ana.lopez@example.com','passw0rd!','Especialista en marketing digital y redes sociales.','/images/usuarios/user3.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 21:36:44
