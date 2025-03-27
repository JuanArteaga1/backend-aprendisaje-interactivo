const PersonaModel = require('../models/Personas');



exports.createPersona = async (Persona) =>{
    const newPersona = new PersonaModel(Persona)
    await newPersona.save()
    return newPersona
}