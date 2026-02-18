const router = require('express').Router();
const authService = require('../services/authService');
const { jsonResponse } = require('../utils/jsonReponse');

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Autenticar usuario
 *     description: Valida las credenciales del usuario y devuelve un token JWT de acceso.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Successful
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AuthData'
 *       400:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: Error
 *               data: Invalid Credentials
 *       403:
 *         description: Usuario inactivo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: Error
 *               data: User is not active
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: Error
 *               data: User not found
 */
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const authToken = await authService.login(email, password);
    if (!authToken) return jsonResponse(res, 400, 'Invalid Credentials');
    return jsonResponse(res, 200, [authToken]);
});

module.exports = router;
