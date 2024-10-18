-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: nchethana2018
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `screen`
--

DROP TABLE IF EXISTS `screen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screen` (
  `id` int NOT NULL AUTO_INCREMENT,
  `screen_name` varchar(45) DEFAULT NULL,
  `enabled` varchar(1) DEFAULT 'Y',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screen`
--

LOCK TABLES `screen` WRITE;
/*!40000 ALTER TABLE `screen` DISABLE KEYS */;
INSERT INTO `screen` VALUES (1,'LocationMaster','Y'),(2,'PartyMaster','Y'),(3,'TitleMaster','Y'),(4,'ProductGroups','Y'),(5,'ModeOfPayment','Y'),(6,'Subjects','Y'),(7,'Department','Y'),(8,'Category','Y'),(9,'EmployeeMaster','Y'),(10,'Contralocation','Y'),(11,'Membership','Y'),(12,'IomInbound','N'),(13,'Designation','Y'),(14,'Years','Y'),(15,'AuthorMaster','Y'),(16,'StockVerification','Y'),(17,'PurchaseInvoice','Y'),(18,'PurchaseReturns','Y'),(19,'SalesInvoice','Y'),(20,'SalesReturns','Y'),(21,'ApprovalMemo','Y'),(22,'StockAdjustment','Y'),(23,'Payments','Y'),(24,'Receipts','Y'),(25,'StockTransferRequisition','Y'),(26,'StockTransfers','Y'),(27,'StockEntry','Y'),(28,'StockReceipts','Y'),(29,'InitiateStockTransfers','Y'),(30,'Viewincomingst','Y'),(31,'Production','Y');
/*!40000 ALTER TABLE `screen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screen_operation_role_map`
--

DROP TABLE IF EXISTS `screen_operation_role_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screen_operation_role_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `screen_id` int DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `operation_id` int DEFAULT NULL,
  `enabled` varchar(1) DEFAULT 'Y',
  PRIMARY KEY (`id`),
  KEY `fsreenmap_idx` (`screen_id`),
  KEY `frolemap_idx` (`role_id`),
  KEY `foperationmap_idx` (`operation_id`),
  CONSTRAINT `foperationmap` FOREIGN KEY (`operation_id`) REFERENCES `operation` (`id`),
  CONSTRAINT `frolemap` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fsreenmap` FOREIGN KEY (`screen_id`) REFERENCES `screen` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screen_operation_role_map`
--

LOCK TABLES `screen_operation_role_map` WRITE;
/*!40000 ALTER TABLE `screen_operation_role_map` DISABLE KEYS */;
INSERT INTO `screen_operation_role_map` VALUES (1,1,1,1,'Y'),(2,1,1,2,'N'),(3,2,1,1,'Y'),(4,3,1,1,'Y'),(5,4,1,1,'Y'),(6,5,1,1,'Y'),(7,6,1,1,'Y'),(8,7,1,1,'Y'),(9,8,1,1,'Y'),(10,9,1,1,'Y'),(11,10,1,1,'Y'),(12,11,1,1,'Y'),(13,12,1,1,'Y'),(14,13,1,1,'Y'),(15,14,1,1,'Y'),(16,15,1,1,'Y'),(17,16,1,1,'Y'),(18,17,1,1,'Y'),(19,18,1,1,'Y'),(20,19,1,1,'Y'),(21,20,1,1,'Y'),(22,21,1,1,'Y'),(23,22,1,1,'Y'),(24,23,1,1,'Y'),(25,24,1,1,'Y'),(26,25,1,1,'Y'),(27,26,1,1,'Y'),(28,27,1,1,'Y'),(29,28,1,1,'Y'),(30,29,1,1,'Y'),(31,30,1,1,'Y'),(32,31,1,1,'Y');
/*!40000 ALTER TABLE `screen_operation_role_map` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-23 12:12:50
