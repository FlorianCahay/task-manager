from flask import Flask

app = Flask(__name__)

@app.route('/test', methods=['GET'])
def index():
	return {
		'text': 'Hello, World !',
		'number': 0
	}
