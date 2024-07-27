export class Pregunta {
  id: number;
  pregunta: string;
  codigo?: string;
  opcion1?: string;
  opcion2?: string;
  opcion3?: string;
  opcion4?: string;
  opcion5?: string;
  opcion6?: string;
  respuestasCorrectas: string[];
  explicacion: string;
  examen: {
    examenId: number;
    chapter: string;
    nombre: string;
    descripcion: string;
  };
  opciones?: string[]; // Add this line

  constructor() {
    this.id = 0;
    this.pregunta = '';
    this.respuestasCorrectas = [];
    this.explicacion = '';
    this.examen = {
      examenId: 0,
      chapter: '',
      nombre: '',
      descripcion: ''
    };
    this.opciones = []; // Initialize the opciones array
  }
}
