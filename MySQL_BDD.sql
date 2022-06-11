-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: carpartspicker
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `carpart`
--

DROP TABLE IF EXISTS `carpart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carpart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6a5mxxq6rjog81mypcri4hm5h` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carpart`
--

LOCK TABLES `carpart` WRITE;
/*!40000 ALTER TABLE `carpart` DISABLE KEYS */;
INSERT INTO `carpart` VALUES (1,'https://i.pinimg.com/736x/2c/b1/53/2cb153557fdf9f65572c5db5c57f5e8e.jpg','Pink velvet steering wheels',200,15,6),(2,'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFCSE1SaXg1T0wuX0FDX1NMMTAyNF8uanBn.jpg','figurine danseuse hawaienne',40,0.2,7),(3, 'https://images.caradisiac.com/logos/4/0/5/0/134050/S7-Barbecue-pas-barbant-il-mange-du-porc-sur-sa-Porsche-38506.jpg','Grill Spoiler Kit',299.99,8,8),(4,'https://fullcartuning.fr/media/catalog/product/cache/7cd71739b8d6d789cef96b3ebf440934/S/T/ST_015MC_GL_04_780x700_780x700_a699.webp','Fluorescent neon steering wheel',149.99,4,6),(5,'https://fullcartuning.fr/media/catalog/product/cache/7cd71739b8d6d789cef96b3ebf440934/8/3/837_99_1470_aeb3.webp','Haters gon hate! Sticker',12,0.1,7),(6,'https://ae01.alicdn.com/kf/HTB1kYKvOpXXXXcbapXXq6xXFXXXE/Motorcycle-Motorbike-Modified-Exhaust-Pipe-Gatling-Gun-Style-Motorbike-Scooter-Exhaust-End-Pipe-Mufflers-AK025.jpg_Q90.jpg_.webp','Machinegun chromatic exhaust',129.99,2,2),(7,'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/06/Itasha19.jpeg?q=50&fit=crop&w=2047&dpr=1.5','Cute Anime wrap',499.99,0.3,10),(8,'https://www.protegez-vous.ca/var/protegez_vous/storage/images/3/6/5/3/4273563-1-fre-CA/catalyseur.jpg','Second-hand stolen catalyctic converter',24,1,2),(9,'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE5MjE5WG95MEwuX0FDX1NMMTUwMF8uanBn.jpg','New car scent freshener',9.99,0.1,7),(10,'https://m.media-amazon.com/images/I/71+CicVtyGL._AC_SY355_.jpg','Vanillaroma freshener',8.99,0.1,7),(11,'https://www.demon-tweeks.com/media/catalog/product/cache/b5174e52bc0b72089f1db3a987e605f3/k/i/kir71500d1.jpg','Economy containment seat',800,17,11),(12,'https://i.ebayimg.com/images/g/HsQAAOSwYmFeoEX6/s-l400.jpg','Renault 206 rear lights',65,2,5),(13,'https://www.bestauto.bg/24277-home_default/led-plafoni-ford-focus-cmax-mk2.jpg','Ford C-max rear lights',165,2,5),(14,'https://img.joomcdn.net/efd4eb22697d7f7934340f279c0a98c6a93ed026_original.jpeg','6LED Slim Flash Light Bar',80,2,5),(15,'https://m.media-amazon.com/images/I/61Xi394CKgL._AC_SX425_.jpg','Wii steering wheel',45,2,6),(16,'https://ae01.alicdn.com/kf/H8ecd50acccbe47fc83ec98f225ffc0e6S/10pcs-Car-Roof-Fin-Car-Spoiler-Universal-Tuning-Roof-Diffuser-Shark-Fins-Spoiler-Wing-Kit-Air.jpg_640x640.jpg','Roof Shark spoilers',90,3,8),(17,'https://www.driftshop.fr/media/catalog/product/0/7/6/9/3/5/large-9c222ce66649a385401eb603361d07bd.jpg','Gold & Platinum Wheels',1499,6,9),(18,'https://img.joomcdn.net/83edd1744ab511190e7cde37e3d9a49ddfae9a48_original.jpeg','RGB Neon Rim',350,2,9),(19,'https://m.media-amazon.com/images/I/71QzCobrIWL._AC_SL1500_.jpg','Wooden Wheel',25,2,9),(20,'https://ae01.alicdn.com/kf/HTB1u2CrXdfvK1RjSspoq6zfNpXaq.jpg_640x640Q90.jpg_.webp','Red Seat Belt',30,1,12),(21,'https://sc01.alicdn.com/kf/HTB1PiF9RpXXXXb6XFXXq6xXFXXXl/201521045/HTB1PiF9RpXXXXb6XFXXq6xXFXXXl.jpg_.webp','Blue velvet seat',950,15,11);/*!40000 ALTER TABLE `carpart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Exterior'),(2,'Exhaust'),(3,'Accessories'),(4,'Seats & Accessories'),(5,'Lights'),(6,'Steering Wheels'),(7,'Decorations'),(8,'Spoilers'),(9,'Wheels'),(10,'Wrap'),(11,'Seats'),(12,'Seats accessories');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_category`
--

DROP TABLE IF EXISTS `main_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_category` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `main_category` WRITE;
/*!40000 ALTER TABLE `main_category` DISABLE KEYS */;
INSERT INTO `main_category` VALUES (1),(2),(3),(4),(5);
/*!40000 ALTER TABLE `main_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `id` int NOT NULL,
  `main_category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK753xnmtixdl7hf7c7h3hsjuam` (`main_category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (6,3),(7,3),(8,1),(9,1),(10,1),(11,4),(12,4);
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-22 14:31:25