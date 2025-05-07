const ProyectosService = require("../services/ProyectosServices")
const InvestigacionServices = require("../services/InvestigacionServices")
const PodtcasServices = require("../services/PodtcasServices")
const SimulacionesServices = require("../services/SimulacionesServices");


exports.GetProyectosAll = async (req, res) => {
    try {
        const proyectos = await ProyectosService.getAllProyectos(req.body);
        const investigacion = await InvestigacionServices.getAllInvestigacion(req.body);
        const podtcas = await PodtcasServices.getAllPodtcas(req.body);
        const simulaciones = await SimulacionesServices.getAllSimulaciones(req.body);

        // Combinar todo en un objeto (o array, según lo que necesites)
        const resultado = {
            proyectos,
            investigacion,
            podtcas,
            simulaciones
        };
        res.status(200).json(resultado);

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "error" });
    }
};

exports.GetProyectosId = async (req, res) => {
    try {
        const proyectos = await ProyectosService.getProyectosId(req.params.id)
        const simulaciones = await SimulacionesServices.getSimulacionesId(req.params.id)
        const investigacion = await InvestigacionServices.getInvestigacionId(req.params.id)
        const podtcas = await PodtcasServices.getAllPodtcasId(req.params.id)
        const resultado = {
            proyectos,
            investigacion,
            podtcas,
            simulaciones
        };
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ message: "error" });
        

    }

}