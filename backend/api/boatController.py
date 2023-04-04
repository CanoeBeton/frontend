from flask import request, jsonify

from api.resource import ApiResource
from domain.boat import BoatRequest
from infra.boatRepository import BoatRepository

boat_repository = BoatRepository()

class BoatController(ApiResource):
    @staticmethod
    def path():
        return "/boat"

    def post(self):
        boat_json = request.get_json()
        boat_request = BoatRequest(boat_json)
        boat_repository.create(boat_request)
        return jsonify({"success": True})

    def get(self):
        boats = boat_repository.get_all()
        return jsonify(boats.__dict__())

class BoatByIdController(ApiResource):
    @staticmethod
    def path():
        return "/boat/<name>"

    def get(self, name):
        boat = boat_repository.get(name)
        return jsonify(boat.__dict__())

    def put(self, name):
        boat_json = request.get_json()

        boat_request = BoatRequest(boat_json)

        boat_repository.update(boat_request, name)
        return jsonify({"success": True})

    def delete(self, name):
        boat_repository.delete(name)
        return jsonify({"success": True})