# CarPartsPicker

## Description

This project is a fake eco-designed site that sells car parts and accessories. It was made by a team of three students for a green-it course.
This project has been programmed in java using the SpringBoot framework.

## Run the project

In order to run the project, you must first create and populate the database. To do this, you will have to run the sql script "MySQL_BDD" located at the root of the project. You will then have to edit the src/main/ressources/application.yml file and uncomment these three lines, indicating your username and password to connect to your mysql database.

```yml
#Local use :
# username: your_sql_username
# password: your_sql_passwd
```

Then open it with eclipse or IntelliJ IDEA and run it.

## Routes and pages

- **http://localhost:8080/SpringRestHibernate/index** :
  Application's main page.
- **http://localhost:8080/SpringRestHibernate/carPartsList?categoryId=<category_id>** :
  Displays the products stored in the category whose id is provided in the url.
- **http://localhost:8080/SpringRestHibernate/carPart?carPartId=<car_part_id>** :
  Displays the details of the car part whose id is provided in the url.
