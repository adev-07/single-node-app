const router = require('express').Router();

/**
 * @openapi
 * /refresh-token:
 *   post:
 *     summary: Renovar token de acceso
 *     description: Genera un nuevo token de acceso a partir de un refresh token válido. (Endpoint en desarrollo)
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refresh_token
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Token renovado exitosamente
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
 *                   example: Refresh Token Successful
 */
router.post('/', (req, res) => {
    res.json({
        success: true,
        message: 'Refresh Token Successful',
    });
});

module.exports = router;
