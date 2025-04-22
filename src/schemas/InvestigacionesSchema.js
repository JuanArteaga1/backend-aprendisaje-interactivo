const { z } = require("zod");

exports.SubirInvestigacionSchema = z.object({
  titulo: z.string({
    required_error: "El título es obligatorio",
  }).min(3, { message: "El título debe tener al menos 3 caracteres" }),

  descripcion: z.string({
    required_error: "La descripción es obligatoria",
  }).max(500, { message: "La descripción no puede superar los 500 caracteres" }),

  archivoPdf: z.string({
    required_error: "El archivo PDF es obligatorio",
  }).min(1, { message: "Debes subir un archivo PDF" }),

  archivoImg: z.string({
    required_error: "La imagen es obligatoria",
  }).min(1, { message: "Debes subir una imagen" }),

  urlArticulo: z.string({
    required_error: "La URL del artículo es obligatoria",
  }).url({ message: "Debe ser una URL válida" }),

  urlDoi: z.string({
    required_error: "La URL DOI es obligatoria",
  }).url({ message: "Debe ser una URL válida" }),

  autores: z.array(z.string({
    required_error: "El ID del autor es obligatorio",
  })).min(1, { message: "Debe haber al menos un autor" }),

  materias: z.array(z.string({
    required_error: "El ID de la materia es obligatorio",
  })).min(1, { message: "Debe seleccionar al menos una materia" }),

  fechaPublicacion: z.coerce.date({
    required_error: "La fecha de publicación es obligatoria",
    invalid_type_error: "Fecha inválida",
  }).min(new Date("2024-01-01"), {
    message: "La fecha debe ser posterior a enero 2024",
  }),
});
