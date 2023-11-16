const { ROUTES } = require("../constants/routes")
const { reply, get } = require("../services/bot")

module.exports = function (app) {
    app.get(ROUTES.BASE, get)
    app.post(ROUTES.REPLY, reply);
}
