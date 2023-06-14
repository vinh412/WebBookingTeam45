-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 14, 2023 lúc 04:30 AM
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
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `typeUser` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `gmail`, `passWord`, `avatar`, `typeUser`, `createdAt`, `updatedAt`) VALUES
(1, 'levan@gmail.com', '12345', NULL, 2, '2023-06-06 19:34:50', '2023-06-06 19:34:50'),
(4, 'levu@gmail.com', '$2a$10$VnW6bqWY/h1/wVAnTo6A2u0oNdUM2qeLWrQWeJeKgVRfNPFD4kNhm', NULL, 2, '2023-06-07 13:13:35', '2023-06-07 13:13:35'),
(5, 'levan1@gmail.com', '$2a$10$skngmV55hj/U/GdVVrfIcO.ug43dYW/22wcH7ZNB2V2Td7anVl0WW', NULL, 2, '2023-06-07 16:54:59', '2023-06-07 16:54:59'),
(6, 'levan3@gmail.com', '$2a$10$qLRpMN2UgI1eY.o2eH5UvuGFlCAE3Q/nCdQYQMr.wK.r.ykUZSMXC', NULL, 2, '2023-06-08 15:57:00', '2023-06-08 15:57:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `numberPhone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bankaccounts`
--

CREATE TABLE `bankaccounts` (
  `id` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `bankNumber` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookingrooms`
--

CREATE TABLE `bookingrooms` (
  `id` int(11) NOT NULL,
  `roomID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `bookingRoomID` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `vocherApplyID` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `pay` int(11) DEFAULT NULL,
  `dateCreate` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `accountID` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `numberPhone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favoritehotels`
--

CREATE TABLE `favoritehotels` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `hotelID` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `accountID` int(11) DEFAULT NULL,
  `nameHotel` varchar(255) DEFAULT NULL,
  `revenua` int(11) DEFAULT NULL,
  `fee` int(11) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `evaluate` int(11) DEFAULT NULL,
  `numberReview` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `minCost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `hotelID` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `hotelID` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `dateCreate` datetime DEFAULT NULL,
  `scores` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `hotelID` int(11) DEFAULT NULL,
  `typeRoomID` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `emptyRoom` int(11) DEFAULT NULL,
  `salePrice` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `hotelID` int(11) DEFAULT NULL,
  `roomID` int(11) DEFAULT NULL,
  `percent` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230606173817-create-admin.js'),
('20230608100234-create-customer.js'),
('20230608101033-create-bank-account.js'),
('create-account.js'),
('create-admin.js'),
('create-bank-account.js'),
('create-booking-room.js'),
('create-booking.js'),
('create-customer.js'),
('create-favorite-hotel.js'),
('create-hotel.js'),
('create-photo.js'),
('create-review.js'),
('create-room.js'),
('create-sale.js'),
('create-type-room.js'),
('create-voucher-collection.js'),
('create-voucher.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `typerooms`
--

CREATE TABLE `typerooms` (
  `id` int(11) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `occupancy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchercollections`
--

CREATE TABLE `vouchercollections` (
  `id` int(11) NOT NULL,
  `voucherID` int(11) DEFAULT NULL,
  `customerID` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discountValue` int(11) DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `voucherQuantity` int(11) DEFAULT NULL,
  `minimumBookingValue` int(11) DEFAULT NULL,
  `maximumDiscount` int(11) DEFAULT NULL,
  `usageCount` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `voucherType` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `bankaccounts`
--
ALTER TABLE `bankaccounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CustomerID` (`CustomerID`);

--
-- Chỉ mục cho bảng `bookingrooms`
--
ALTER TABLE `bookingrooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomID` (`roomID`);

--
-- Chỉ mục cho bảng `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookingRoomID` (`bookingRoomID`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `vocherApplyID` (`vocherApplyID`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountID` (`accountID`);

--
-- Chỉ mục cho bảng `favoritehotels`
--
ALTER TABLE `favoritehotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotelID` (`hotelID`),
  ADD KEY `customerID` (`customerID`);

--
-- Chỉ mục cho bảng `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountID` (`accountID`);

--
-- Chỉ mục cho bảng `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotelID` (`hotelID`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `hotelID` (`hotelID`);

--
-- Chỉ mục cho bảng `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotelID` (`hotelID`),
  ADD KEY `typeRoomID` (`typeRoomID`);

--
-- Chỉ mục cho bảng `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotelID` (`hotelID`),
  ADD KEY `roomID` (`roomID`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `typerooms`
--
ALTER TABLE `typerooms`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `vouchercollections`
--
ALTER TABLE `vouchercollections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `voucherID` (`voucherID`);

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bankaccounts`
--
ALTER TABLE `bankaccounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bookingrooms`
--
ALTER TABLE `bookingrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `favoritehotels`
--
ALTER TABLE `favoritehotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `typerooms`
--
ALTER TABLE `typerooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vouchercollections`
--
ALTER TABLE `vouchercollections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bankaccounts`
--
ALTER TABLE `bankaccounts`
  ADD CONSTRAINT `bankaccounts_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customers` (`id`);

--
-- Các ràng buộc cho bảng `bookingrooms`
--
ALTER TABLE `bookingrooms`
  ADD CONSTRAINT `bookingrooms_ibfk_1` FOREIGN KEY (`roomID`) REFERENCES `rooms` (`id`);

--
-- Các ràng buộc cho bảng `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`bookingRoomID`) REFERENCES `bookingrooms` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`customerID`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`vocherApplyID`) REFERENCES `vouchercollections` (`id`);

--
-- Các ràng buộc cho bảng `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `accounts` (`id`);

--
-- Các ràng buộc cho bảng `favoritehotels`
--
ALTER TABLE `favoritehotels`
  ADD CONSTRAINT `favoritehotels_ibfk_1` FOREIGN KEY (`hotelID`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `favoritehotels_ibfk_2` FOREIGN KEY (`customerID`) REFERENCES `customers` (`id`);

--
-- Các ràng buộc cho bảng `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `accounts` (`id`);

--
-- Các ràng buộc cho bảng `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`hotelID`) REFERENCES `hotels` (`id`);

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`hotelID`) REFERENCES `hotels` (`id`);

--
-- Các ràng buộc cho bảng `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`hotelID`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `rooms_ibfk_2` FOREIGN KEY (`typeRoomID`) REFERENCES `typerooms` (`id`);

--
-- Các ràng buộc cho bảng `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`hotelID`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`roomID`) REFERENCES `rooms` (`id`);

--
-- Các ràng buộc cho bảng `vouchercollections`
--
ALTER TABLE `vouchercollections`
  ADD CONSTRAINT `vouchercollections_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `vouchercollections_ibfk_2` FOREIGN KEY (`voucherID`) REFERENCES `vouchers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
