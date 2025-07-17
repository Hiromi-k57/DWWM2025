-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2025-07-17 16:19:14
-- サーバのバージョン： 10.4.32-MariaDB
-- PHP のバージョン: 8.2.12

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- テーブルのデータのダンプ `todos`
--

INSERT INTO `todos` (`id`, `title`, `date_time`, `checked`, `userId`) VALUES
(14, '123', '2025-07-17 09:34:43', 0, 3),
(15, 'test 555', '2025-07-17 14:28:05', 0, 5),
(16, '123test2', '2025-07-17 14:58:23', 0, 6);

-- --------------------------------------------------------

--
-- テーブルの構造 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- テーブルのデータのダンプ `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`, `name`) VALUES
(3, 'ela', '$2y$10$xfAOkw2BwbFf7Ibzikc7Gea/LD5Tf12uq7raRHk.ws8xJQf7hDqWa', 'Ela'),
(5, 'test1', '$2y$10$jCBTNi/NYKrYo7FO5KqwZeyp2mjV6YvWlm5JklymgTnxulZsGlx76', 'test1'),
(6, 'test2', '$2y$10$ookIB4MWgaQqbLjPvVkhMejs74ZSv2sGIv75qIeI9wLvcuEgrEDXG', 'test2'),
(7, 'test9', '$2y$10$PTyNTnn1TE3rLpmIxEWTCubA0WN19vNy3YhARwK2.WqDuJ2VgmOH2', 'test name'),
(8, 'test22', '$2y$10$Awg9ZPK71Si2oDFF2OfYGuK710SFisHiRlb2CMblV.7rg6i1kLmea', 'test22'),
(9, 'test222', '$2y$10$jeAJWFDMBNaziWsWFudPae.QHF3QuvGFt1jRHionNxGsIBpIIGJbm', 'test222'),
(10, 'test8', '$2y$10$NoqrDl4jABq0wrfbtYafgeS2qUg/0WVvOm0yPCrvAKPUl2BbGu.eq', 'test8');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- テーブルの AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
