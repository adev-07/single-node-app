const router = require('express').Router();

/**
 * @openapi
 * /signout:
 *   post:
 *     summary: Cerrar sesión
 *     description: Invalida el token de acceso del usuario y cierra la sesión activa. (Endpoint en desarrollo)
 *     tags:
 *       - Autenticación
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
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
 *                   example: Signout Successful
 */
router.post('/', (req, res) => {
    res.json({
        success: true,
        message: 'Signout Successful',
    });
});

module.exports = router;
