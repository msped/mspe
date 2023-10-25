# mspe.me - Personal Developer website

Personal website as a developer to show development project and as a point of contact.

## Features

-   Home page with a small about section on why I started programming and latest project.

-   Page to show development projects:

    -   Link to live and/or github project
    -   Description of the website
    -   Technologies used

-   Page to show current CV with option to download a PDF version.

## Technology

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS33)
-   [JavaScript](https://www.javascript.com/)
-   [Django](https://www.djangoproject.com/)
    -   [Django Rest Framework](https://www.django-rest-framework.org/)
-   [Pillow](https://python-imaging.github.io/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Docker](https://www.docker.com/)
-   [React](https://react.dev/)

## Running Locally

To run this site locally you will first need to install Docker. You can find the installation guide [here](https://www.docker.com/get-started/).

1. In the root directory run `docker compose up -d`. This will start a docker container running the frontend, backend, and database.

2. To create a superuser run `docker exec -it mspe_backend bash`.

3. Run `python3 manage.py createsuperuser`, fill out the form, then type `exit` and then hit enter.

You can now go to `127.0.0.1:3000` for React and `127.0.0.1:8000` for the Django admin panel.
