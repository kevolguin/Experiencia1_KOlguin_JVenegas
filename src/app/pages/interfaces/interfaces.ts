export interface RespuestaToHeadLines {
    feriado: Article[];
  }
  
  export interface Article {
    nombre: string;
    comentarios: string;
    fecha: string;
    irrenunciable: number;
    tipo: string;
    leyes?: Ley[];
  }

  export interface Ley {
    nombre: string;
    url: string;
  }
  