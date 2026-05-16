# TaskFlow — Application Full Stack de Gestion de Tâches

TaskFlow est une application web full stack permettant de créer, organiser et suivre des tâches au quotidien.

Le projet propose une interface moderne et simple pour gérer des tâches, modifier leur statut, définir leur priorité, rechercher des tâches et consulter des statistiques via un tableau de bord.

Ce projet a été réalisé comme projet portfolio afin de démontrer mes compétences en développement full stack avec **Angular** côté frontend et **Spring Boot** côté backend.

## Objectif du projet

L’objectif de TaskFlow est de proposer une application claire pour organiser son travail et suivre l’avancement de ses tâches.

Ce projet met en avant :

- une architecture frontend / backend ;
- une API REST avec Spring Boot ;
- une interface Angular moderne ;
- des opérations CRUD complètes ;
- une gestion des statuts et priorités ;
- une structure de projet propre et maintenable.

---

## Fonctionnalités principales

### Gestion des tâches

- Créer une nouvelle tâche
- Modifier une tâche existante
- Supprimer une tâche
- Rechercher une tâche
- Filtrer les tâches par statut
- Suivre l’avancement des tâches

### Statuts disponibles

Une tâche peut avoir plusieurs statuts :

- À faire
- En cours
- Terminée

### Priorités disponibles

Chaque tâche peut avoir une priorité :

- Faible
- Moyenne
- Haute

### Tableau de bord

Le tableau de bord permet de visualiser rapidement :

- le nombre total de tâches ;
- les tâches à faire ;
- les tâches en cours ;
- les tâches terminées ;
- les tâches prioritaires.

---

## Stack technique

### Frontend

- Angular
- TypeScript
- HTML
- CSS

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- H2 pour le test local

### Outils

- Git
- GitHub
- Maven
- npm
- Visual Studio Code

---

## Architecture du projet

```txt
taskflow/
│
├── taskflow-backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── taskflow-frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── docs/
│   └── screenshot.png
│
├── README.md
└── .gitignore
```

Le projet est séparé en deux parties :

- `taskflow-backend` : API REST développée avec Spring Boot
- `taskflow-frontend` : interface utilisateur développée avec Angular

---

# Comment tester l’application en local

Cette partie explique comment cloner le projet depuis GitHub et le lancer sur un ordinateur.

---

## Prérequis

Avant de lancer le projet, il faut avoir installé :

- Git
- Java JDK
- Maven
- Node.js
- npm

Pour vérifier les installations :

```bash
git --version
java -version
mvn -v
node -v
npm -v
```

---

## 1. Cloner le projet

Dans un terminal :

```bash
git clone https://github.com/Hamza-dev-max/taskflow.git
cd taskflow
```

Vérifier le contenu du projet :

```bash
dir
```

Le projet doit contenir :

```txt
taskflow-backend
taskflow-frontend
README.md
```

---

# Lancer le backend

Le backend doit être lancé en premier.

## Option 1 — Lancer avec VS Code

Ouvrir le projet dans VS Code :

```bash
code .
```

Aller dans le fichier principal Spring Boot :

```txt
taskflow-backend/src/main/java/com/emsi/taskflow/TaskflowApplication.java
```

Ouvrir le fichier `TaskflowApplication.java`, puis cliquer sur `Run` au-dessus de :

```java
public static void main(String[] args)
```

Attendre un message comme :

```txt
Tomcat started on port 8080
```

ou :

```txt
Started TaskflowApplication
```

Le backend est alors lancé sur :

```txt
http://localhost:8080
```

---

## Option 2 — Lancer avec le terminal

Depuis la racine du projet :

```bash
cd taskflow-backend
mvn spring-boot:run
```

Le backend doit rester ouvert dans ce terminal.

Adresse du backend :

```txt
http://localhost:8080
```

---

# Lancer le frontend

Ouvrir un deuxième terminal.

Depuis la racine du projet :

```bash
cd taskflow-frontend
npm install
npm start
```

Si `npm start` ne fonctionne pas :

```bash
npx ng serve
```

Le frontend démarre normalement sur :

```txt
http://localhost:4200
```

---

# Ouvrir l’application

Quand le backend et le frontend sont lancés, ouvrir le navigateur à cette adresse :

```txt
http://localhost:4200
```

---

## Comment tester rapidement

Une fois l’application ouverte :

1. Créer une nouvelle tâche
2. Ajouter un titre et une description
3. Choisir un statut : à faire, en cours ou terminée
4. Choisir une priorité : faible, moyenne ou haute
5. Ajouter la tâche
6. Modifier une tâche existante
7. Rechercher une tâche
8. Filtrer les tâches par statut
9. Supprimer une tâche
10. Vérifier les statistiques du tableau de bord

---

## Résultat attendu

L’application doit afficher une interface web permettant de gérer les tâches.

Le frontend Angular communique avec le backend Spring Boot via une API REST.

Le backend gère les opérations CRUD :

- création ;
- lecture ;
- modification ;
- suppression.

Si le backend n’est pas lancé, le frontend affiche un message indiquant qu’il est impossible de charger les tâches.

---

## Ce que ce projet démontre

Ce projet démontre ma capacité à :

- concevoir une application full stack complète ;
- développer une API REST avec Spring Boot ;
- créer une interface utilisateur avec Angular ;
- gérer des opérations CRUD ;
- structurer un projet frontend/backend ;
- utiliser Maven et npm dans un projet complet ;
- organiser une application web claire, simple et maintenable.
## Auteur

**Hamza Marzaq**

Étudiant en Licence Informatique — Université Grenoble Alpes  
Recherche d’alternance en développement logiciel, web full stack ou cybersécurité.

- GitHub : https://github.com/Hamza-dev-max
- LinkedIn : https://www.linkedin.com/in/hamza-marzaq
- Portfolio : https://hamza-dev-max.github.io/portfolio/
