-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2019 at 08:54 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

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
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `SLOT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `position_table`
--

INSERT INTO `position_table` (`POS_ID`, `POSITION`, `DESCRIPTION`, `SLOT`) VALUES
(1, 'HR Assistant', '  2 to 3 years HR assistant must have a experience of liaison Papers for government and basic skills for admin task.', 3),
(2, 'Accounting', ' 2 to 3 years of experience in Accounting and Payroll and must be a College graduate.', 2),
(3, 'Marketing', ' test Description', 1),
(4, 'Test Position', 'Test Description', 2),
(6, 'ICT Associate', 'Must atleast 1 year experience; ndfksdhsafhdksafnsakfnsakfnsafnsafnsakfnsakfnsa\'pfjweproqwjrkwqnpofjwqtrwqpoi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ref_log`
--

CREATE TABLE `ref_log` (
  `REF_ID` int(11) NOT NULL,
  `EMP_NAME` varchar(100) NOT NULL,
  `REF_LAST_NAME` varchar(50) NOT NULL,
  `REF_FIRST_NAME` varchar(50) NOT NULL,
  `REF_ADDRESS` varchar(50) NOT NULL,
  `REF_CONTACT` varchar(15) NOT NULL,
  `REF_EMAIL` varchar(100) NOT NULL,
  `POSITION` varchar(50) DEFAULT NULL,
  `STATUS` varchar(50) DEFAULT NULL,
  `DATE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ref_log`
--

INSERT INTO `ref_log` (`REF_ID`, `EMP_NAME`, `REF_LAST_NAME`, `REF_FIRST_NAME`, `REF_ADDRESS`, `REF_CONTACT`, `REF_EMAIL`, `POSITION`, `STATUS`, `DATE`) VALUES
(4, 'A.Zablan', 'DELA CRUZ', 'JUAN', 'San Fernando City Pampanga', '+63 955 123 456', 'juan.delacruz@gmail.com', 'HR Assistant', 'Hired', '2019-07-30'),
(5, 'me', 'Test Lname', 'Test Fname', 'test Angeles City', '09123456789', 'test@test.test', 'Accounting', 'Reviewed', '2019-07-31'),
(6, 'Test', 'Test 2', 'Test 2', 'San Fernando City ', '092323232', 'test2@test@.test2', 'HR Assistant', 'Pending Interview', '2019-07-31'),
(7, 'Juan Dela Cruz', 'Zablan', 'Adrian', 'NCR', '+63 912 345 678', 'adrian.zablan@dict.gov.ph', 'HR Assistant', 'Pending Interview', '2019-07-31'),
(8, 'x', 'x', 'x', 'x', 'x', 'x', 'HR Assistant', 'Final Interview', '2019-07-31'),
(9, 'XXXXXX', 'X', 'XX', 'XXXXX', 'XXX', 'XXXX', 'HR Assistant', 'Final Interview', '2019-07-31'),
(11, 'xxxxxxx', 'x', 'xx', 'xxxxxx', 'xxx', 'xxxx', 'HR Assistant', 'Pending Interview', '2019-07-31'),
(13, 'asdsd', 'azxzxc', 'xzczxc', 'zxczxc', '12321312', 'asdasdasd', 'ICT Associate', 'Reviewed', '2019-08-05');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `STATUS_ID` int(11) NOT NULL,
  `STATUS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`STATUS_ID`, `STATUS`) VALUES
(1, 'Reviewed'),
(2, 'Pending for Interview'),
(3, 'Final Interview'),
(4, 'Accepted');

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
  MODIFY `POS_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ref_log`
--
ALTER TABLE `ref_log`
  MODIFY `REF_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `STATUS_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
