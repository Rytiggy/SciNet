# SciNet
SciNet is an extension for chrome that scrapes the browser caches of the user who visited the journals for paper info. SciNet will then processes that info into a form our API can use.

How to use:
Open Chrome and go to chrome://extensions/

Ensure that the Developer mode checkbox in the top right-hand corner is checked.

Select the button "Load unpacked extension" and navigate the the folder named extension and select it.

## Backend
To use the API backend for development, create a new virtualenv and run `pip install backend/requirements.txt` from the repo root. Make sure all migrations have been made by running `python manage.py makemigrations api` and `python manage.py migrate` in order, then start up the server by running the command: `python manage.py runserver`.
