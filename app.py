# import sqlite3
import connect
from flask import Flask, render_template, request, url_for, flash, redirect
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'admin'

@app.route('/')
def index():
    data = connect.map()
    deces = connect.deces()
    somme = connect.somme()
    return render_template('index.html', data=data, somme = somme, deces = deces)#,  courbe = courbe, plo = plo

if __name__ == '__main__':
    app.run(port=5000, debug = True)