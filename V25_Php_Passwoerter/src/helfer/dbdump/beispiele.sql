-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Dez 2019 um 17:57
-- Server-Version: 10.1.28-MariaDB
-- PHP-Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `beispiele`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `autoren`
--

CREATE TABLE `autoren` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `vorname` varchar(100) NOT NULL,
  `geburtsjahr` int(11) DEFAULT NULL,
  `todesjahr` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `autoren`
--

INSERT INTO `autoren` (`id`, `name`, `vorname`, `geburtsjahr`, `todesjahr`) VALUES
(1, 'Duerrenmatt', 'Friedrich', 1921, 1990),
(2, 'Frisch', 'Max', 1911, 1991),
(3, 'Suter', 'Martin', 1948, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE `benutzer` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `passwort` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`id`, `name`, `passwort`) VALUES
(1, 'Hans', 'hans72'),
(2, 'Ute', '123456'),
(3, 'Peter', 'peterABC');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `buecher`
--

CREATE TABLE `buecher` (
  `id` int(11) NOT NULL,
  `titel` varchar(300) NOT NULL,
  `autorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `buecher`
--

INSERT INTO `buecher` (`id`, `titel`, `autorId`) VALUES
(1, 'Die Physiker', 1),
(2, 'Der Besuch der alten Dame', 1),
(3, 'Der Richter und sein Henker', 1),
(4, 'Andorra', 2),
(5, 'Stiller', 2),
(6, 'Homo Faber', 2),
(7, 'Die Zeit, die Zeit', 3),
(8, 'Die dunkle Seite des Mondes', 3),
(9, 'Montechristo', 3);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `autoren`
--
ALTER TABLE `autoren`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `buecher`
--
ALTER TABLE `buecher`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autorFK` (`autorId`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `autoren`
--
ALTER TABLE `autoren`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `buecher`
--
ALTER TABLE `buecher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `buecher`
--
ALTER TABLE `buecher`
  ADD CONSTRAINT `autorFK` FOREIGN KEY (`autorId`) REFERENCES `autoren` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
