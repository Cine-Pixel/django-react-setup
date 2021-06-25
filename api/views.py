from django.shortcuts import render
from django.http import JsonResponse 


def main(request, *args, **kwargs):
    return JsonResponse({"message":"hello World"})
