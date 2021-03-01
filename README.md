# task-manager

## Virtual environment

### Windows

Create and activate :

```bash
py -3 -m venv env
env\Scripts\activate.bat
```

Deactivate :

```bash
env\Scripts\deactivate.bat
```

Install python packages :

```bash
pip install -r requirements.txt
```

Environment variable :

- In `.env` or `.flaskenv` file :

	```
	FLASK_APP=app.py
	FLASK_ENV=development
	```

- In terminal :

    ```
    set FLASK_APP=app.py
    set FLASK_ENV=development
```

Run :

```bash
npm run start-flask-api  # backend
npm start 				# frontent
```

