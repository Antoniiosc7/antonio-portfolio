export class Examen {
  constructor(
    public examenId: number,
    public chapter: string,
    public nombre: string,
    public descripcion?: string
  ) {}
}
