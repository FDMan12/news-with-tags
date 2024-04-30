from django.shortcuts import render
from django.views import View
import json

import app.apps


# Create your views here.

class BaseTemplateView(View):  # Base
    template_name = 'index.html'

    def get_context_data(self, request):
        # Собираем все параметры запроса в контекст
        return {
            'post_data': request.body,
            'get_data': json.dumps(request.GET)  # Сериализуем в JSON
        }

    def get(self, request):
        # Возвращаем шаблон без изменений для GET-запросов
        return render(request, self.template_name)

    def post(self, request):
        # Отправляем клиенту отрендеренный с контекстом шаблон
        return render(request, self.template_name, self.get_context_data(request))
    


