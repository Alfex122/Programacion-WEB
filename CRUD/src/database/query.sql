CREATE DATABASE Menu;

USE Menu;

CREATE TABLE Minuta(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Platillo Varchar(50),
    Precio INT,
    Submenu INT,
    Disponibilidad boolean
);

select * from Minuta;