from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
import json
from django.contrib.staticfiles.storage import staticfiles_storage

# Create your views here.
def home(request):
    return render(request, "map/home.html")


def about(request):
    p = staticfiles_storage.path('airports.csv')
    df = pd.read_csv(p)
    df = df.head(2)

    # for idx in range(len(df)):
    jsonData = df[["AIRPORT", "LATITUDE", "LONGITUDE"]].to_json(orient="records")
    context = {
        "data": jsonData,
    }
    return render(request, "map/about.html", context)
