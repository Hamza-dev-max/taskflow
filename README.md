# TaskFlow — Application de gestion de tâches fullstack

TaskFlow est une application web fullstack de gestion de tâches développée dans un cadre académique à l’EMSI Rabat.

## Objectif

Permettre à un utilisateur de créer, modifier, supprimer et suivre l’avancement de ses tâches à travers une interface moderne connectée à une API REST.

## Fonctionnalités

- Création de tâches
- Modification de tâches
- Suppression de tâches
- Changement de statut : à faire, en cours, terminée
- Gestion de priorité : faible, moyenne, haute
- Recherche de tâches
- Filtrage par statut
- Dashboard de statistiques
- Persistance des données avec MySQL

## Technologies

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL

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

## Architecture

```txt
TaskFlow/
├── taskflow-backend/
│   └── API REST Spring Boot
└── taskflow-frontend/
    └── Interface Angular
```

## Base de données

Créer une base MySQL :

```sql
CREATE DATABASE taskflow_db;
```

La table `tasks` est générée automatiquement par Hibernate.

## Lancer le backend

```bash
cd taskflow-backend
mvn spring-boot:run
```

API disponible sur :

```txt
http://localhost:8080/api/tasks
```

## Lancer le frontend

```bash
cd taskflow-frontend
npm install
ng serve
```

Application disponible sur :

```txt
http://localhost:4200/
```

## Auteur

Hamza Marzaq  
Projet académique EMSI Rabat — 2023 / 2024
