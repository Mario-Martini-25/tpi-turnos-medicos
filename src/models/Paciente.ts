import mongoose, { Schema } from "mongoose";

const pacienteSchema = new Schema(
  {
    dni: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\d{7,8}$/, "El DNI debe contener 7 u 8 dígitos numéricos"]
    },

    nombre: {
      type: String,
      required: true,
      trim: true,
      match: [/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, "El nombre debe contener solo letras y espacios"]
    },

    apellido: {
      type: String,
      required: true,
      trim: true,
      match: [/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, "El apellido debe contener solo letras y espacios"]
    },

    fechaNacimiento: {
      type: Date
    },

    contacto: {
      telefono: {
        type: String,
        trim: true,
        match: [/^[0-9\-+ ]+$/, "El teléfono solo admite números, guiones y el signo +"]
      },
      email: {
        type: String,
        lowercase: true,
        match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Debe ser una dirección de email válida"]
      }
    },

    obraSocial: {
      nombre: {
        type: String,
        trim: true
      },
      numeroAfiliado: {
        type: String,
        trim: true
      }
    },

    activo: {
      type: Boolean,
      default: true
    },

    fechaBaja: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

export const Paciente = mongoose.model(
  "Paciente",
  pacienteSchema
);