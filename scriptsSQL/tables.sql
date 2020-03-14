CREATE TABLE `car_for_sale` (
  `item_number` varchar(36) NOT NULL,
  `VIN` varchar(45) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `price_left_range` double DEFAULT NULL,
  `price_right_range` double DEFAULT NULL,
  `mileage` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`item_number`),
  UNIQUE KEY `VIN_UNIQUE` (`VIN`)
); 

CREATE TABLE `car_model` (
  `idcar_model` int(11) NOT NULL,
  `item_number_car` varchar(45) DEFAULT NULL,
  `model_name` varchar(75) DEFAULT NULL,
  `cylinders` varchar(4) DEFAULT NULL,
  `city_mpg` varchar(20) DEFAULT NULL,
  `highway_mpg` varchar(20) DEFAULT NULL,
  `engine` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`idcar_model`),
  KEY `car_for_sale_car_model_fk_idx` (`item_number_car`),
  CONSTRAINT `car_for_sale_car_model_fk` FOREIGN KEY (`item_number_car`) REFERENCES `car_for_sale` (`item_number`)
);

CREATE TABLE `car_pictures` (
  `idcar_pictures` int(11) NOT NULL,
  `item_number_car` varchar(45) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idcar_pictures`),
  KEY `car_for_sale_fk_idx` (`item_number_car`),
  CONSTRAINT `car_for_sale_fk` FOREIGN KEY (`item_number_car`) REFERENCES `car_for_sale` (`item_number`)
);

CREATE TABLE `car_statistics` (
  `id_statistics_car` int(11) NOT NULL,
  `item_number_car` varchar(45) NOT NULL,
  `views` int(11) DEFAULT NULL,
  `saves` int(11) DEFAULT NULL,
  `shares` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_statistics_car`),
  KEY `car_for_sale_car_statistics_fk_idx` (`item_number_car`),
  CONSTRAINT `car_for_sale_car_statistics_fk` FOREIGN KEY (`item_number_car`) REFERENCES `car_for_sale` (`item_number`)
);


