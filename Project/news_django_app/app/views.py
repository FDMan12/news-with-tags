from django.shortcuts import render
from django.views import View
import json


# Create your views here.

class FrontendTemplateView(View):
    def get(self, request):
        # Возвращаем шаблон без изменений для GET-запросов
        return render(request, 'index.html')
    
    def post(self, request):
        # Собираем все параметры запроса в контекст
        context = {
            'post_data': request.body,
            'get_data': json.dumps(request.GET)  # Сериализуем в JSON
        }

        # Отправляем клиенту отрендеренный с контекстом шаблон
        return render(request, 'index.html', context)
