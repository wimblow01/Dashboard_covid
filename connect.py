import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


def map():
    data = pd.read_csv("../dataset/data1.csv" , sep=';')
    data = data[data.sexe == 0]
    del data['sexe']

    tot_dc = data['dc'][-101:]
    tot_dc.reset_index(drop=True, inplace=True)

    data_dep = pd.read_csv("../dataset/dep_list.csv" , sep=',')

    # Allier les colonnes code_departement du Highmaps France admin2 et le nombre de décès du dataset
    new_data = pd.concat([data_dep, tot_dc.reindex(data_dep.index)], axis=1)

    go_to_list = new_data.drop(['num'], axis=1)

    # Mise en forme des données à incorporer dans le JS
    return go_to_list.values.tolist()
    
def deces():
    data = pd.read_csv("../dataset/data1.csv" , sep=';')
    data = data[data.sexe == 0]
    day_data = data.groupby('jour')['dc'].sum().to_frame(name ='sum_dc').reset_index()

    list_1 = list(day_data['sum_dc'])
    list_1.insert(0, 0)
    list_2 = list(day_data['sum_dc'])

    list_3 = []
    for i, j in zip(list_1, list_2):
        z = j - i
        list_3.append(z)

    dc_day = pd.DataFrame(list_3)
    dc_day.columns = ['dc per day']

    dc_day = pd.concat([day_data['jour'], dc_day.reindex(day_data.index)], axis=1)

    return dc_day.values.tolist()


def somme():
    data = pd.read_csv("../dataset/data1.csv" , sep=';')
    data = data[data.sexe == 0]
    day_data = data.groupby('jour')['dc'].sum().to_frame(name ='sum_dc').reset_index()

    return day_data.values.tolist()