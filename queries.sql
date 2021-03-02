CREATE DATABASE weather;
CREATE TABLE `weather`.`history` ( `query` TEXT NOT NULL , `date` DATE NOT NULL , `description` TEXT NULL DEFAULT NULL , `avg_temp` INT NULL DEFAULT NULL , `min_temp` INT NULL , `max_temp` INT NULL , `humidity` INT NULL , `pressure` INT NULL , `visibility` INT NULL , `wind_speed` INT NULL) ENGINE = InnoDB;
ALTER TABLE `history` ADD `city_id` INT NOT NULL AFTER `date`;
ALTER TABLE `history` ADD `city_name` TEXT NOT NULL AFTER `city_id`;
ALTER TABLE `history` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);