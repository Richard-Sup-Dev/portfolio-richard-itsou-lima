export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string; // Exemplo de formato: "Jun 2024"
  link?: string; // Link para o certificado digital (exemplo: Credly, Coursera, etc.)
  image?: string; // Caminho da imagem (exemplo: "/certificates/aws-certified.png")
  description?: string;
}