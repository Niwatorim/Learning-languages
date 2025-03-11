FROM python:3.8-slim

WORKDIR /assignment

RUN pip install Flask==2.0.1 Flask-PyMongo==2.3.0 "pymongo[srv]"==3.12.0 Werkzeug==2.0.1

COPY . .

EXPOSE 5000

ENV MONGO_URI=mongodb+srv://niwatorim001:testing123@users.eihuf.mongodb.net/Users?retryWrites=true&w=majority&appName=Users

CMD ["python", "app.py"]
