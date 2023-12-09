-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2023 at 08:34 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_book` (IN `name` VARCHAR(250), IN `author` VARCHAR(250) CHARSET utf8mb4, IN `edition` VARCHAR(250), IN `publish` VARCHAR(250), IN `cost` VARCHAR(250), IN `ISBN` VARCHAR(250), IN `qty` VARCHAR(250), IN `description` VARCHAR(250), IN `user_id` VARCHAR(250))   BEGIN

INSERT INTO `book`(`name`, `author`,`edition`, `publish`,`cost`, `ISBN`,`qty`,`description`,`user_id`)
VALUES (name,author,edition,publish,cost,ISBN,qty,description,user_id);
select 'saved' as msg;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_bookcase` (IN `name` VARCHAR(250), IN `number` VARCHAR(250) CHARSET utf8mb4, IN `description` VARCHAR(250), IN `user_id` VARCHAR(250))   BEGIN

INSERT INTO `bookcase`( `id`, `name`, `number`,`description`,`user_id`)
VALUES (id,name,number,description,user_id);
select 'saved' as msg;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_section` (IN `name` VARCHAR(250), IN `number` VARCHAR(250) CHARSET utf8mb4, IN `description` VARCHAR(250), IN `c_id` INT(11), IN `user_id` VARCHAR(250))   BEGIN

INSERT INTO `section`( `id`, `name`, `number`,`description`,`c_id`,`user_id`)
VALUES (id,name,number,description,c_id,user_id);
select 'saved' as msg;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_students` (IN `id` VARCHAR(250), IN `name` VARCHAR(250), IN `sex` VARCHAR(250) CHARSET utf8mb4, IN `address` VARCHAR(250), IN `phone` VARCHAR(250), IN `email` VARCHAR(250), IN `age` VARCHAR(250), IN `user_id` VARCHAR(250))   BEGIN

INSERT INTO `students`( `id`, `name`, `sex` , `address`, `phone`, `email`,`age`,`user_id`)
VALUES (id,name,sex,address,phone,email,age,user_id);
select 'saved' as msg;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `barrow`
--

CREATE TABLE `barrow` (
  `id` int(11) NOT NULL,
  `student_id` int(40) NOT NULL,
  `department_id` int(50) NOT NULL,
  `qty` varchar(50) NOT NULL,
  `book_id` int(56) NOT NULL,
  `issudate` varchar(200) NOT NULL,
  `returndate` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `author` varchar(50) NOT NULL,
  `edition` varchar(50) NOT NULL,
  `publish` varchar(50) NOT NULL,
  `cost` int(30) NOT NULL,
  `description` text NOT NULL,
  `ISBN` varchar(200) NOT NULL,
  `qty` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookcase`
--

CREATE TABLE `bookcase` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `number` int(50) NOT NULL,
  `description` text NOT NULL,
  `user_id` varchar(56) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookcase`
--

INSERT INTO `bookcase` (`id`, `name`, `number`, `description`, `user_id`, `date`) VALUES
(1, 'case12', 34, 'waa qeebta sharciga', '1', '2023-12-05'),
(2, 'case13', 345678, 'waa qeebta sharciga', '1', '2023-12-05'),
(5, 'case13', 345678, 'waa qeebta engneringka', '1', '2023-12-05'),
(6, 'ecnomic', 9, 'to complete my project ', '1', '2023-12-06');

-- --------------------------------------------------------

--
-- Table structure for table `bookcategory`
--

CREATE TABLE `bookcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookcategory`
--

INSERT INTO `bookcategory` (`id`, `name`, `user_id`, `date`) VALUES
(5, 'farah', '1', '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `description`, `date`) VALUES
(1, 'sharciga', 'waa qeebta sharciga', '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `reading`
--

CREATE TABLE `reading` (
  `id` int(11) NOT NULL,
  `student_id` int(50) NOT NULL,
  `book_id` int(50) NOT NULL,
  `starttime` date NOT NULL,
  `endtime` date NOT NULL,
  `point` varchar(200) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `returnbooks`
--

CREATE TABLE `returnbooks` (
  `id` int(11) NOT NULL,
  `student_id` int(50) NOT NULL,
  `Returndate` varchar(50) NOT NULL,
  `qty` varchar(50) NOT NULL,
  `user_id` varchar(56) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `number` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `c_id` varchar(50) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`id`, `name`, `number`, `description`, `c_id`, `user_id`, `date`) VALUES
(1, 'case13', '345678', 'waa qeebta sharciga', '1', '1', '2023-12-05'),
(2, 'hamdi', '88888', 'to complete my project ', '1', '1', '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` varchar(250) NOT NULL,
  `name` varchar(200) NOT NULL,
  `sex` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(56) NOT NULL,
  `email` varchar(200) NOT NULL,
  `age` varchar(200) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `sex`, `address`, `phone`, `email`, `age`, `user_id`, `date`) VALUES
('ID001', 'hamdi', 'female', 'warta nabada', '+25256139366309', 'cademanka68@gmail.com', '226', '1', '2023-12-05 12:15:19'),
('ID002', 'hamdi', '', '', '', '', '22', '1', '2023-12-06 11:02:13'),
('ID003', 'ilka dhaqis', 'male', 'warta nabada', '0613936630', 'cademanka68@gmail.com', '25', '1', '2023-12-06 15:04:53'),
('ID004', 'farah', 'male', 'warta nabada', '+25256139366309', 'abdirahmamziyach@gmail.com', '227', '1', '2023-12-06 15:07:05'),
('ID005', 'fardowda', 'female', 'warta nabada', '0613936630', 'abdirahmamziyach@gmail.com', '23', '1', '2023-12-06 15:08:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barrow`
--
ALTER TABLE `barrow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookcase`
--
ALTER TABLE `bookcase`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookcategory`
--
ALTER TABLE `bookcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reading`
--
ALTER TABLE `reading`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returnbooks`
--
ALTER TABLE `returnbooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barrow`
--
ALTER TABLE `barrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bookcase`
--
ALTER TABLE `bookcase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `bookcategory`
--
ALTER TABLE `bookcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reading`
--
ALTER TABLE `reading`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `returnbooks`
--
ALTER TABLE `returnbooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
