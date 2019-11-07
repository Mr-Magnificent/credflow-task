# student-api

## Create `.env` file within the project root similar to `.env.example`. Kindly add your database credentials within the file.
For example to create credentials for `.env.example` login into mysql/mariadb instance as root.

```
> create user 'credflow'@'locahost' identified by '1234';
> create database credflow;
> grant all privileges on credflow.* to 'credflow'@'localhost';
```


After creating the database we need to run migrations and run the seeds for data population.
```
$ yarn
$ yarn run latest
$ yarn run seed-run
$ yarn start
```

goto `localhost:5000/`
