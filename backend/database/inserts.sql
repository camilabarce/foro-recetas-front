INSERT INTO usuarios (idusuario, nombre, email, contraseña, biografia, imagen) VALUES
(1, 'Juan Pérez', 'juan.perez@example.com', 'contraseña123', 'Desarrollador de software con 5 años de experiencia.', 'juan.jpg'),
(2, 'María García', 'maria.garcia@example.com', 'segura456', 'Diseñadora gráfica apasionada por el arte digital.', 'maria.png'),
(3, 'Carlos Sánchez', 'carlos.sanchez@example.com', 'clave789', 'Ingeniero de datos especializado en big data.', 'carlos.jpeg'),
(4, 'Ana López', 'ana.lopez@example.com', 'passw0rd!', 'Especialista en marketing digital y redes sociales.', 'ana.jpg');

INSERT INTO recetas (idrecetas, titulo, subtitulo, imagen, pasos, ingredientes, idusuario) VALUES
(1, 'Sandwich de Jamón y Cheddar', 'Delicioso y fácil de preparar', 'sandwich.jpg', '1. Cortar el pan. 2. Colocar jamón y queso cheddar. 3. Calentar en la plancha.', 'Pan, Jamón, Queso Cheddar', 1),
(2, 'Pizza Margarita', 'Clásica y sabrosa', 'pizza.jpg', '1. Preparar la masa. 2. Añadir salsa de tomate. 3. Colocar mozzarella y albahaca. 4. Hornear a 220°C por 15 minutos.', 'Masa, Salsa de Tomate, Mozzarella, Albahaca', 2),
(3, 'Ravioles de Espinaca', 'Pasta fresca rellena de espinaca y ricota', 'ravioles.jpg', '1. Preparar la masa de pasta. 2. Hacer el relleno de espinaca y ricota. 3. Formar los ravioles. 4. Cocinar en agua hirviendo por 3 minutos.', 'Harina, Espinaca, Ricota, Huevos', 3);

INSERT INTO categorias (nombre, imagen) VALUES
('Panes', '/images/categorias/panes.png'),
('Pastas', '/images/categorias/pastas.png'),
('Tartas', '/images/categorias/tartas.png'),
('Tortas', '/images/categorias/tortas.png'),
('Postres', '/images/categorias/postres.png'),
('Carnes', '/images/categorias/carnes.png'),
('Cócteles', '/images/categorias/cocteles.png'),
('Arroces', '/images/categorias/arroces.png'),
('Sándwiches', '/images/categorias/sandwiches.png'),
('Ensaladas', '/images/categorias/ensaladas.png'),
('Sopas', '/images/categorias/sopas.png'),
('Pizzas', '/images/categorias/pizzas.png'),
('Pescados', '/images/categorias/pescados.png');
