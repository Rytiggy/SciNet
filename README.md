# SciNet
SciNet is an extension for chrome that scrapes the browser caches of the user who visited the journals for paper info. SciNet will then processes that info into a form our API can use.

## Frontend
To load the SciNet extension in Chrome, open up `chrome://extensions/` in your browser and click `Developer mode` in the top right. 
Now click `Load unpacked extension…` and select the extension’s directory. You should now see your extension in the list.

## Backend
To use the API backend for development, create a new virtualenv if you don't already have one (with virtualenvwrapper, `mkvirtualenv <envname>`), make sure you're in it (`workon <envname>`) and run `pip install -r backend/requirements.txt` from the repo root to make sure your dependencies are up to date.

Make sure all new migrations and changes to the database schema have been made by running 

`python manage.py makemigrations api` and 
`python manage.py migrate` in order, 

then start up the server by running the command: `python manage.py runserver`.
    
## Todos
Expand to multiple websites, currently working on http://science.sciencemag.org/ <br />
Add website name as a way to tell where each entry is from
Refacto frontend
