const jwt = require('jsonwebtoken')

const middlewareValidarJWT = (req, res, next) => {
    const token = req.headers["authorization"]
    jwt.verify(token, "@$key@$", (err, userInfo) => {
        if (err) {
            res.status(403).json(err)
            return
        }
        req.userInfo = userInfo
        next()
    })
}

module.exports = middlewareValidarJWT