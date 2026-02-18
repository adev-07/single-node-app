const router = require('express').Router();
const { jsonResponse } = require('../utils/jsonReponse');

const userService = require('../services/userService');

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna la lista completa de usuarios registrados. Requiere un token JWT válido.
 *     tags:
 *       - Usuarios
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
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
 *                     $ref: '#/components/schemas/User'
 *       401:
 *         description: Token ausente o inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: Error
 *               data: Unauthorized
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
 *         description: No se encontraron usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: Error
 *               data: No users found
 */
router.get('/', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        if (!users || users.length === 0) return jsonResponse(res, 404, 'No users found');
        return jsonResponse(res, 200, users);
    } catch (error) {
        return jsonResponse(res, 400, error);
    }
});

module.exports = router;
