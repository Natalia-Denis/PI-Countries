const { Router } = require('express');
const countryRoutes = require ('./country')
const tourismRoutes = require ('./tourism')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRoutes)
router.use('/tourism', tourismRoutes)


module.exports = router;
