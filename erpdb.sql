-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2019 at 10:36 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erpdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `emp_table`
--

CREATE TABLE `emp_table` (
  `EMP_ID` int(11) NOT NULL,
  `EMP_NO` int(11) NOT NULL,
  `LAST_NAME` varchar(50) NOT NULL,
  `FIRST_NAME` varchar(50) NOT NULL,
  `POSITION` varchar(50) NOT NULL,
  `REF_NAME` varchar(50) NOT NULL,
  `REF_POS` varchar(50) NOT NULL,
  `REF_CONTACT` int(11) NOT NULL,
  `REF_ADDRESS` varchar(50) NOT NULL,
  `REF_EMAIL` varchar(50) NOT NULL,
  `DATE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_table`
--

INSERT INTO `emp_table` (`EMP_ID`, `EMP_NO`, `LAST_NAME`, `FIRST_NAME`, `POSITION`, `REF_NAME`, `REF_POS`, `REF_CONTACT`, `REF_ADDRESS`, `REF_EMAIL`, `DATE`) VALUES
(1, 115300215, 'Pasion', 'Jeremiah Zyrel', 'Programmer', 'test ref', 'accounting', 2147483647, 'sapa libutad', 'email@gmail.com', '2019-07-29');

-- --------------------------------------------------------

--
-- Table structure for table `position_table`
--

CREATE TABLE `position_table` (
  `POS_ID` int(11) NOT NULL,
  `POSITION` varchar(100) NOT NULL,
  `CANDIDATES` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ref_log`
--

CREATE TABLE `ref_log` (
  `REF_ID` int(11) NOT NULL,
  `EMP_ID` int(11) NOT NULL,
  `REF_NAME` varchar(50) NOT NULL,
  `REF_ADDRESS` varchar(50) NOT NULL,
  `REF_CONTACT` int(11) NOT NULL,
  `POSITION` varchar(50) NOT NULL,
  `STATUS_ID` int(11) NOT NULL,
  `DATE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `STATUS_ID` int(11) NOT NULL,
  `STATUS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `USER_ID` int(11) NOT NULL,
  `USERNAME` varchar(50) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL,
  `POSITION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`USER_ID`, `USERNAME`, `PASSWORD`, `POSITION`) VALUES
(1, 'test', '*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19', 'prog'),
(3, 'test2', 'test', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp_table`
--
ALTER TABLE `emp_table`
  ADD PRIMARY KEY (`EMP_ID`);

--
-- Indexes for table `position_table`
--
ALTER TABLE `position_table`
  ADD PRIMARY KEY (`POS_ID`);

--
-- Indexes for table `ref_log`
--
ALTER TABLE `ref_log`
  ADD PRIMARY KEY (`REF_ID`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`STATUS_ID`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`USER_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emp_table`
--
ALTER TABLE `emp_table`
  MODIFY `EMP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `position_table`
--
ALTER TABLE `position_table`
  MODIFY `POS_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ref_log`
--
ALTER TABLE `ref_log`
  MODIFY `REF_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `STATUS_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
