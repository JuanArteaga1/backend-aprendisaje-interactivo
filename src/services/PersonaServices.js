const PersonaModel = require('../models/Personas');



exports.createPersona = async (Persona) => {
    const newPersona = new PersonaModel(Persona)
    await newPersona.save()
    return newPersona
}
exports.getAllPersona = async () => {
    const Persona = await PersonaModel.find();
    return Persona;
};
exports.getPersonaId = async (id) => {
    const Persona = await PersonaModel.findById(id);
    return Persona;
};
exports.PutPersonaId = async (id, Persona) => {
    const Personas = await PersonaModel.findByIdAndUpdate(id, Persona);
    return Personas;
};
exports.DeletePersonaId = async (id) => {
    try {
        const personaEliminada = await PersonaModel.findOneAndDelete({ UsuarioId: id});
        return personaEliminada;
    } catch (error) {
        console.error('Error eliminando persona por UsuarioId:', error);
        throw error;
    }
};