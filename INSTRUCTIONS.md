# Instructions rapides

## 1. Prérequis

Installer :
- Java 17 ou 21
- Maven
- Node.js
- Angular CLI : `npm install -g @angular/cli`
- MySQL

## 2. Créer la base MySQL

```sql
CREATE DATABASE taskflow_db;
```

## 3. Lancer le backend

```bash
cd taskflow-backend
mvn spring-boot:run
```

Tester : http://localhost:8080/api/tasks

## 4. Lancer le frontend

Dans un deuxième terminal :

```bash
cd taskflow-frontend
npm install
ng serve
```

Ouvrir : http://localhost:4200/
