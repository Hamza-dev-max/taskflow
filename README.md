# TaskFlow — Application de gestion de tâches

TaskFlow est une application web fullstack permettant de créer, organiser et suivre ses tâches au quotidien.

L’application propose une interface moderne pour gérer les tâches, suivre leur statut, définir leur priorité et visualiser des statistiques simples.

## Objectif

Permettre à un utilisateur de mieux organiser son travail grâce à une application simple, claire et efficace.

## Fonctionnalités

- Création de tâches
- Modification de tâches
- Suppression de tâches
- Changement de statut : à faire, en cours, terminée
- Gestion de priorité : faible, moyenne, haute
- Recherche de tâches
- Filtrage par statut
- Tableau de bord avec statistiques
- Sauvegarde des tâches côté backend

## Technologies utilisées

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- H2 pour le test local
- MySQL prévu pour une configuration base de données relationnelle

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Outils
- Git
- GitHub
- VS Code
- Maven
- npm

## Architecture

```txt
TaskFlow/
├── taskflow-backend/      # API REST
└── taskflow-frontend/     # Interface utilisateur
