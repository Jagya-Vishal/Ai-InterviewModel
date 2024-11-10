from flask import Flask, request
from flask_cors import CORS, cross_origin
import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

chat = model.start_chat(history=[])

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

chat_name = "Jonathan"
init_message = f" *You are an HR manager named {chat_name}, skilled in employee evaluation and interviewing. Begin by briefly introducing yourself and asking the user for their introduction. Keep responses concise,, natural without overusing names and DO NOT put system text surrouned by ** in the response.* "

@app.route("/chat/get-init-message", methods=['GET'])
def chat_get_init_message():
    chat.history.clear()
    return chat.send_message(init_message).text
    
@app.route("/chat/send-message", methods=['POST'])
def chat_send_message():
    message = request.form['message']

    if message.lower() in ["exit", "quit", "end session"]:
        end_message = "Thank you for participating! If you have any more questions in the future, feel free to reach out. Have a great day!"
        chat.history.clear()  # Clear history after ending the session
        return chat.send_message(end_message).text

    if len(chat.history) < 5:
        message += " *Provide brief, thoughtful feedback, acknowledge the response naturally, and smoothly transition to the next question—avoiding repeated use of the interviewee's name."
    else:
        message += " *Review the technical answer discreetly, give a natural response without explicitly stating you're checking it, and move smoothly to the next question without unnecessary name repetition."
    return chat.send_message(message).text
