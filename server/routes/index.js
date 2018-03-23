const routesLoader = require('../utils/routesLoader')

const routing = function (app) {
    routesLoader(`${__dirname}`).then(routers => {
        routers.forEach(router => {
            app
                .use(router.routes())
                .use(router.allowedMethods({
                    throw: true
                }))
        })
    })
}

module.exports = routing
