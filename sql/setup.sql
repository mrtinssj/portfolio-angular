-- =============================================================
--  setup.sql  |  Portfolio - dwii_db
--  Execute:  mariadb -u root -p < sql/setup.sql
-- =============================================================

-- 1. BANCO DE DADOS
DROP DATABASE IF EXISTS dwii_db;
CREATE DATABASE dwii_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dwii_db;

-- 2. TABELAS

CREATE TABLE projetos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nome        VARCHAR(100)  NOT NULL,
  descricao   TEXT,
  tecnologias VARCHAR(255),
  link_github VARCHAR(255),
  ano         YEAR,
  status      ENUM('publicado', 'rascunho') NOT NULL DEFAULT 'rascunho',
  criado_em   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tecnologias (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nome        VARCHAR(100) NOT NULL UNIQUE,
  categoria   VARCHAR(50),
  descricao   TEXT,
  ano_criacao YEAR
);

-- 3. DADOS — PROJETOS

INSERT INTO projetos (nome, descricao, tecnologias, link_github, ano, status) VALUES
('Noimann Imports',
 'Aplicativo para loja de importados desenvolvido para projeto escolar.',
 'Mobile, E-commerce',
 'https://github.com/mrtinssj/AppTemplate2026',
 2026, 'publicado'),

('Agencia de Marketing',
 'Projeto da minha futura agencia focada em solucoes digitais.',
 'Marketing Digital, Web',
 'https://github.com/mrtinssj/agencia',
 2026, 'publicado'),

('Projeto PHP',
 'Sistema desenvolvido no trimestre passado utilizando PHP e Banco de Dados.',
 'PHP, MariaDB, Backend',
 'https://github.com/mrtinssj/2026-DWII',
 2025, 'publicado'),

('Runora Template',
 'Interface de aplicativo exclusiva para Smartwatch.',
 'UI/UX, Smartwatch',
 'https://github.com/mrtinssj/RunoraTemplate',
 2026, 'rascunho');

-- 4. DADOS — TECNOLOGIAS

INSERT INTO tecnologias (nome, categoria, descricao, ano_criacao) VALUES
('HTML',       'Frontend',       'Linguagem de marcacao para estrutura de paginas.', 1993),
('CSS',        'Frontend',       'Linguagem de estilos para apresentacao visual.',   1996),
('JavaScript', 'Frontend',       'Linguagem de programacao para o navegador.',       1995),
('PHP',        'Backend',        'Linguagem server-side para web dinamica.',         1994),
('MariaDB',    'Banco de Dados', 'SGBD relacional open-source.',                     2009),
('Git',        'DevOps',         'Sistema de controle de versao distribuido.',       2005);

-- 5. VERIFICACAO

SELECT id, nome, ano, status FROM projetos;
SELECT id, nome, categoria        FROM tecnologias;