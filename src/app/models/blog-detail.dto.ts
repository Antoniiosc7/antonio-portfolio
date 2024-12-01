export interface BlogDetailDTO {
  id: number;
  codBlog: string;
  title: string;
  imageUrl: string;
  description: string;
  content: string;
  visitas: number;
  createdAt: string; // Use string to represent LocalDateTime
  github?: string; // Nueva propiedad opcional
}
