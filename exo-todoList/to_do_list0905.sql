-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- ホスト: mysql
-- 生成日時: 2025 年 9 月 05 日 11:49
-- サーバのバージョン： 11.8.2-MariaDB-ubu2404
-- PHP のバージョン: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `to_do_list`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `date_time` datetime NOT NULL DEFAULT current_timestamp(),
  `checked` tinyint(1) NOT NULL DEFAULT 0,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `todos`
--

INSERT INTO `todos` (`id`, `title`, `date_time`, `checked`, `userId`) VALUES
(16, '123test2', '2025-07-17 14:58:23', 0, 6),
(18, 'user-test2 todo0805', '2025-08-05 19:55:09', 0, 6),
(28, 'test3 0816-1', '2025-08-16 09:39:12', 0, 11),
(33, 'test3 0816-4', '2025-08-16 14:54:06', 0, 11),
(35, 'test4 todo 2', '2025-08-16 14:55:10', 0, 12),
(42, 'test222-0825todolist', '2025-08-25 12:17:19', 0, 9),
(44, 'test3 0825TODO1', '2025-08-25 13:00:47', 1, 11),
(47, 'test4 todo0825-2', '2025-08-25 14:17:20', 1, 12),
(51, 'test5-todo0825-1', '2025-08-25 15:06:21', 0, 14),
(52, 'test5-todo0825-2', '2025-08-25 15:06:29', 1, 14),
(68, 'test3-0826todo TZ=paris', '2025-08-26 15:55:08', 1, 11);

-- --------------------------------------------------------

--
-- テーブルの構造 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`, `name`) VALUES
(6, 'test2', '$2y$10$ookIB4MWgaQqbLjPvVkhMejs74ZSv2sGIv75qIeI9wLvcuEgrEDXG', 'test2'),
(9, 'test222', '$2y$10$jeAJWFDMBNaziWsWFudPae.QHF3QuvGFt1jRHionNxGsIBpIIGJbm', 'test222'),
(11, 'test3', '$2y$10$cwTcoNHUzn.6I9Mfo4.9cuYtxkeNHPhlUSw/IHmjcSNwB.uFRchqi', 'test3'),
(12, 'test4', '$2y$10$MXjyCE2GJtWXwSSndEHMT.XHQ4TJIY0YNb5bb4JUKlsEWEKBDV46y', 'test4'),
(13, '&lt;script&gt;alert(1)&lt;/script&gt;', '$2y$10$geSN2KrzECJFmbdTRX3/pOf1PbQvEhbKgBC6ofgTpqu6aU7Ig0QyG', '&lt;script&gt;alert(1)&lt;/script&gt;'),
(14, 'test5', '$2y$10$V0aYUMkzr/ix/uOxODsi9ec8ZGWJznTuOU8sdNfLdonQTOp9xNAg6', 'test5'),
(15, 'test6', '$2y$10$vPnEEKk.DNb.avPWoOGuvu0RHWgloj6byl46sY.DltiFwpkbK9Mn2', 'test6'),
(16, 'test7', '$2y$10$c6dZ/5Q.b3vlGQDyDk9qk.PicKWHeLapLurfrlImkixW8r6jxsOTW', 'test7'),
(17, 'test8', '$2y$10$JI71o/zet8ZfF27Mh2Q9yOHW4cN4xbIZQxefD3Mr5ovr92GVDtPH.', 'test8'),
(21, 'test10', '$2y$10$hKbjfQlT.VltluBx9v3VLutdGwOspqF7JTTaeYXRNHgLr6V3s7Iim', 'test10');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- テーブルのインデックス `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- テーブルの AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- ダンプしたテーブルの制約
--

--
-- テーブルの制約 `todos`
--
ALTER TABLE `todos`
  ADD CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
