
-- create
CREATE TABLE Classmates (
  Id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO Classmates (name, age, adress) VALUES ('Александр', 29, 'Москва');
INSERT INTO Classmates (name, age, adress) VALUES ('Екатерина', 35, 'Брянск');
INSERT INTO Classmates (name, age, adress) VALUES ('Ольга', 42, 'Волгоград');
INSERT INTO Classmates (name, age, adress) VALUES ('Алексей', 17, 'Минск');
INSERT INTO Classmates (name, age, adress) VALUES ('Ирина', 25, 'Москва');
INSERT INTO Classmates (name, age, adress) VALUES ('Александр', 39, 'Минск');
INSERT INTO Classmates (name, age, adress) VALUES ('Сергей', 47, 'Могилёв');
INSERT INTO Classmates (name, age, adress) VALUES ('Елизавета', 15, 'Москва');
INSERT INTO Classmates (name, age, adress) VALUES ('Ольга', 28, 'Волгоград');
INSERT INTO Classmates (name, age, adress) VALUES ('Марина', 31, 'Москва');


-- fetch 
SELECT name
FROM Classmates 
WHERE 
  adress = 'Москва'  
  AND age > 18
  AND age < 30;
