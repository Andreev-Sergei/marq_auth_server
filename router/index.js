const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const router = Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.users) // mock data

module.exports = router