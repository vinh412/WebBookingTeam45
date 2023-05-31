-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 31, 2023 lúc 06:54 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webbooking`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `ID` int(11) NOT NULL,
  `Gmail` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `TypeUser` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `PhoneNumber` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bank_account`
--

CREATE TABLE `bank_account` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `NumberAccount` varchar(100) NOT NULL,
  `BankName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booking`
--

CREATE TABLE `booking` (
  `ID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `DateTimeCreate` int(11) NOT NULL,
  `VocherApplyID` int(11) NOT NULL,
  `BookingRoomID` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Pay` int(11) NOT NULL,
  `Discount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booking_room`
--

CREATE TABLE `booking_room` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `PhoneNumber` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite_hotel`
--

CREATE TABLE `favorite_hotel` (
  `ID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `DateCreate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hotel`
--

CREATE TABLE `hotel` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `NameHotel` varchar(100) NOT NULL,
  `Revenua` int(100) NOT NULL,
  `Fee` int(100) NOT NULL,
  `PhoneNumber` varchar(100) NOT NULL,
  `Type` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hotel_branch`
--

CREATE TABLE `hotel_branch` (
  `ID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Evaluate` int(11) NOT NULL,
  `NumberReviews` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `review`
--

CREATE TABLE `review` (
  `ID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `HotelBranchID` int(11) NOT NULL,
  `Note` text NOT NULL,
  `DateCreate` date NOT NULL,
  `Scores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `ID` int(11) NOT NULL,
  `Cost` int(11) NOT NULL,
  `HotelBranchID` int(11) NOT NULL,
  `TypeRoomID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `EmptyRoom` int(11) NOT NULL,
  `SalePrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sale`
--

CREATE TABLE `sale` (
  `ID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `Percent` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_room`
--

CREATE TABLE `type_room` (
  `ID` int(11) NOT NULL,
  `Category` int(11) NOT NULL,
  `Occupancy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vocher`
--

CREATE TABLE `vocher` (
  `ID` int(11) NOT NULL,
  `Code` varchar(100) NOT NULL,
  `DiscountValue` int(11) NOT NULL,
  `ExpiryDate` date NOT NULL,
  `VocherQuantity` int(11) NOT NULL,
  `MinimumValue` int(11) NOT NULL,
  `MaximumDiscount` int(11) NOT NULL,
  `UsageCount` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `Description` text NOT NULL,
  `VoucherType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vocher_collection`
--

CREATE TABLE `vocher_collection` (
  `ID` int(11) NOT NULL,
  `VocherID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`);

--
-- Chỉ mục cho bảng `bank_account`
--
ALTER TABLE `bank_account`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `booking`
--
ALTER TABLE `booking`
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `BookingRoomID` (`BookingRoomID`),
  ADD KEY `VocherApplyID` (`VocherApplyID`);

--
-- Chỉ mục cho bảng `booking_room`
--
ALTER TABLE `booking_room`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RoomID` (`RoomID`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`);

--
-- Chỉ mục cho bảng `favorite_hotel`
--
ALTER TABLE `favorite_hotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `HotelID` (`HotelID`);

--
-- Chỉ mục cho bảng `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AccountID` (`AccountID`);

--
-- Chỉ mục cho bảng `hotel_branch`
--
ALTER TABLE `hotel_branch`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelID` (`HotelID`);

--
-- Chỉ mục cho bảng `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `HotelBranchID` (`HotelBranchID`);

--
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelBranchID` (`HotelBranchID`),
  ADD KEY `TypeRoomID` (`TypeRoomID`);

--
-- Chỉ mục cho bảng `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelID` (`HotelID`),
  ADD KEY `RoomID` (`RoomID`);

--
-- Chỉ mục cho bảng `type_room`
--
ALTER TABLE `type_room`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `vocher`
--
ALTER TABLE `vocher`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `vocher_collection`
--
ALTER TABLE `vocher_collection`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `VocherID` (`VocherID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bank_account`
--
ALTER TABLE `bank_account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `booking_room`
--
ALTER TABLE `booking_room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `favorite_hotel`
--
ALTER TABLE `favorite_hotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hotel`
--
ALTER TABLE `hotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hotel_branch`
--
ALTER TABLE `hotel_branch`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `review`
--
ALTER TABLE `review`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `room`
--
ALTER TABLE `room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sale`
--
ALTER TABLE `sale`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `type_room`
--
ALTER TABLE `type_room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vocher`
--
ALTER TABLE `vocher`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vocher_collection`
--
ALTER TABLE `vocher_collection`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`);

--
-- Các ràng buộc cho bảng `bank_account`
--
ALTER TABLE `bank_account`
  ADD CONSTRAINT `bank_account_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `account` (`ID`);

--
-- Các ràng buộc cho bảng `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`ID`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`BookingRoomID`) REFERENCES `booking_room` (`ID`),
  ADD CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`VocherApplyID`) REFERENCES `vocher_collection` (`ID`);

--
-- Các ràng buộc cho bảng `booking_room`
--
ALTER TABLE `booking_room`
  ADD CONSTRAINT `booking_room_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `room` (`ID`);

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`);

--
-- Các ràng buộc cho bảng `favorite_hotel`
--
ALTER TABLE `favorite_hotel`
  ADD CONSTRAINT `favorite_hotel_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`ID`),
  ADD CONSTRAINT `favorite_hotel_ibfk_2` FOREIGN KEY (`HotelID`) REFERENCES `hotel` (`ID`);

--
-- Các ràng buộc cho bảng `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`ID`);

--
-- Các ràng buộc cho bảng `hotel_branch`
--
ALTER TABLE `hotel_branch`
  ADD CONSTRAINT `hotel_branch_ibfk_1` FOREIGN KEY (`HotelID`) REFERENCES `hotel` (`ID`);

--
-- Các ràng buộc cho bảng `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`ID`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`HotelBranchID`) REFERENCES `hotel_branch` (`ID`);

--
-- Các ràng buộc cho bảng `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`HotelBranchID`) REFERENCES `hotel_branch` (`ID`),
  ADD CONSTRAINT `room_ibfk_2` FOREIGN KEY (`TypeRoomID`) REFERENCES `type_room` (`ID`);

--
-- Các ràng buộc cho bảng `sale`
--
ALTER TABLE `sale`
  ADD CONSTRAINT `sale_ibfk_1` FOREIGN KEY (`HotelID`) REFERENCES `hotel` (`ID`),
  ADD CONSTRAINT `sale_ibfk_2` FOREIGN KEY (`RoomID`) REFERENCES `room` (`ID`);

--
-- Các ràng buộc cho bảng `vocher_collection`
--
ALTER TABLE `vocher_collection`
  ADD CONSTRAINT `vocher_collection_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`ID`),
  ADD CONSTRAINT `vocher_collection_ibfk_2` FOREIGN KEY (`VocherID`) REFERENCES `vocher` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
