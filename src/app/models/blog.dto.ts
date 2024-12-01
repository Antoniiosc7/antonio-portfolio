export interface BlogDTO {
  id: number;
  codBlog: string;
  title: string;
  imageUrl: string;
  description: string;
  visitas: number | null;
  createdAt: string; // Use string to represent LocalDateTime
}
