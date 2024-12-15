# Proyecto: Taller2 microservicios

## Descripción
Este proyecto implementa un microservicio para la gestion de acceso utilizando el framework [NestJS](https://github.com/nestjs/nest). 



## Tecnologías Utilizadas
- **NestJS:** Framework principal para la construcción del proyecto.
- **TypeScript:** Lenguaje utilizado para una escritura más robusta y mantenible.
- **MS SQL SERVER:** Base de datos de microsoft, almacenada localmente en docker.
- **Prisma ORM:** Para la gestión de la base de datos, modelado y consultas eficientes.

---

## Configuración del Proyecto

### Instalación
Primero, clona el repositorio y ejecuta el siguiente comando dentro del directorio para instalar las dependencias:

    ```bash
    $ npm install
    $ npm install dotenv
    $ docker compose up -d
    $ npm run build
    $ npx prisma generate
    $ npx prisma migrate dev --name "1ra migracion"
    $ run npm db:seed

## Compilación y Ejecución

Dependiendo del entorno, puedes usar los siguientes comandos para iniciar el proyecto:

Desarrollo: 

    ```bash 
    $ npm run start

Modo Watch (Desarrollo Continuo):

    ```bash 
    $ npm run start:dev

Producción:

    ```bash 
    $ npm run start:prod
---
## Autores

- **Nicolas Gonzalez Caro** [GitHub](https://github.com/teitonOrange)
- **Rey Valdes Marangunic** [GitHub](https://github.com/rexwar)

