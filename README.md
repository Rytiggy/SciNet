# SciNet
SciNet is an extension for chrome that scrapes the browser caches of the user who visited the journals for paper info. SciNet will then processes that info into a form our API can use.

How to use:
Open Chrome and go to chrome://extensions/

Ensure that the Developer mode checkbox in the top right-hand corner is checked.

Select the button "Load unpacked extension" and navigate the the folder named extension and select it.

## Backend
To use the API backend for development, create a new virtualenv if you don't already have one (with virtualenvwrapper, `mkvirtualenv <envname>`), make sure you're in it (`workon <envname>`) and run `pip install backend/requirements.txt` from the repo root to make sure your dependencies are up to date.

Make sure all new migrations and changes to the database schema have been made by running 

`python manage.py makemigrations api` and 
`python manage.py migrate` in order, 

then start up the server by running the command: `python manage.py runserver`.
