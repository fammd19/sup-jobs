# sup-jobs

## Introduction

As a small co and start-up lover, I have often struggled to find a job site which truly specialises in start-ups and small business. So, when the time came for my final on my Software Engineering course, it was a no brainer. The web-app is designed to help candidates search and save for jobs, and for companies to post jobs.

## Installation

To use the app:

1. Clone the repo locally
2. Open two terminals: 1 from /client and one from /server
3. In the client folder: 
- Run `npm install` then `npm start`
4. In the server folder:
- Run `pipenv install && pipenv shell`
- If you wish to see the databsed, run `python candidate-seed.py`, `python company-seed.py` then `python job-seed.py`
- Finally, run `python app.py --debug` 

