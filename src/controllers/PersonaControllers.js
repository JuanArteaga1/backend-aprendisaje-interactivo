const PersonaServices = require('../services/PersonaServices');

exports.createPersona = async (req, res) => {
    try {
        const Persona = await PersonaServices.createPersona(req.body);
        res.status(201).json(Persona);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

