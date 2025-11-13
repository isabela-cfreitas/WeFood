-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: wefood
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estabelecimento`
--

DROP TABLE IF EXISTS `estabelecimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estabelecimento` (
  `id_estabelecimento` int NOT NULL,
  `cnpj` varchar(20) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `imagem` varchar(300) DEFAULT NULL,
  `distancia` float DEFAULT NULL,
  `avaliacao` float DEFAULT NULL,
  `frete` float DEFAULT NULL,
  PRIMARY KEY (`id_estabelecimento`),
  UNIQUE KEY `cnpj` (`cnpj`),
  CONSTRAINT `estabelecimento_ibfk_1` FOREIGN KEY (`id_estabelecimento`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estabelecimento`
--

LOCK TABLES `estabelecimento` WRITE;
/*!40000 ALTER TABLE `estabelecimento` DISABLE KEYS */;
INSERT INTO `estabelecimento` VALUES (1,'00.000.000/0001-00','Rua A, 123','imagens/estabelecimentos/joaogrilo.jpg',0.5,5,6),(2,'00.000.000/0002-00','Rua B, 321','imagens/estabelecimentos/pedraocoxinhas.jpg',1.2,5,0),(3,'00.000.000/0003-00','Av. C, 10','imagens/estabelecimentos/sopleto.png',2.5,4.8,0),(4,'00.000.000/0004-00','Av. D, 15','imagens/estabelecimentos/mosaico.jpg',0.8,5,0),(5,'00.000.000/0005-00','Campus UFV','imagens/estabelecimentos/dce.jpg',2.2,4,6),(6,'00.000.000/0006-00','Centro, Viçosa','imagens/estabelecimentos/bocavicosa.jpg',0.9,4.6,8);
/*!40000 ALTER TABLE `estabelecimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `numTelefone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `hashSenha` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'João Grillo','1111-1111','jg@gmail.com','123'),(2,'Pedrão Coxinhas','2222-2222','pedrao@gmail.com','123'),(3,'Spoleto','3333-3333','spoleto@gmail.com','123'),(4,'Mosaico Sorveteria','4444-4444','mosaico@gmail.com','123'),(5,'Lanchonete DCE','5555-5555','dce@gmail.com','123'),(6,'Boca Viçosa','6666-6666','bocavicosa@gmail.com','123');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-13 14:50:38
