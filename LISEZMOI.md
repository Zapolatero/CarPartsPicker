# CarPartsPicker

## Fescription

Ce projet est un faux site éco-conçu qui vend des pièces et accessoires automobiles. Il a été réalisé par une équipe de trois étudiants : Ambre Zugmeyer, Benjamin Vermorel et Louis Pascuzzi pour un cours de green-it.
Ce projet a été programmé en java à l'aide du framework SpringBoot.

## Exécuter le projet

Pour exécuter le projet, vous devez d'abord créer et remplir la base de données. Pour cela, vous devrez lancer le script sql "MySQL_BDD" situé à la racine du projet.
Vous devrez ensuite modifier le fichier src/main/ressources/application.yml et décommenter ces trois lignes, en indiquant votre nom d'utilisateut et mot de passe pour vous connecter à votre base de données mysql.

```yml
#Local use :
# username: your_sql_username
# password: your_sql_passwd
```

Nous n'avons pas réussi à générer un .jar fonctionnel, pour l'exécuter vous devrez donc l'ouvrir avec eclipse ou IntelliJ IDEA et l'exécuter.

## Pages

- **http://localhost:8080/SpringRestHibernate/index** :
  Page principale de l'application.
- **http://localhost:8080/SpringRestHibernate/carPartsList?categoryId=<category_id>** :
  Affiche les produits stockés dans la catégorie dont l'id est fourni dans l'url.
- **http://localhost:8080/SpringRestHibernate/carPart?carPartId=<car_part_id>** :
  Affiche les détails de la pièce auto dont l'id est fourni dans l'url.
