from flask import request, jsonify

from api.resource import ApiResource
from infra.yearRepository import YearRepository

year_repository = YearRepository()

class YearController(ApiResource):
    @staticmethod
    def path():
        return "/year"

    def post(self):
        year_json = request.get_json()
        year_repository.create(year_json)
        return jsonify({"success": True})

    def get(self):
        if request.headers.get('active') == 'true':
            year = year_repository.get_active()
            return jsonify(year.__dict__())

        years = year_repository.get_all()
        return jsonify(years.__dict__())

class YearByIdController(ApiResource):
    @staticmethod
    def path():
        return "/year/<year>"

    def get(self, year):
        year = year_repository.get(year)
        return jsonify(year.__dict__())

    def put(self, year):
        year_json = request.get_json()
        year_repository.update(year_json, year)
        return jsonify({"success": True})

    def delete(self, year):
        year_repository.delete(year)
        return jsonify({"success": True})

class YearActivateController(ApiResource):
    @staticmethod
    def path():
        return "/year/<year>/activate"

    def post(self, year):
        year_repository.activate(year)
        return jsonify({"success": True})