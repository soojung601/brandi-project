from flask      import Flask
from flask_cors import CORS

def create_app():
    """

    Returns :
        생성된 플라스크 앱 객체

    Authors :
        tnwjd060124@gmail.com (손수정)

    History :
        2020-08-19 (tnwjd060124@gmail.com) : 초기 생성

    """

    app = Flask(__name__)
    CORS(app)
    app.config.from_pyfile("config.py")

    return app
