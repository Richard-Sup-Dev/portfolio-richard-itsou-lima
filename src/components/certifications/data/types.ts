export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string; // formato: "Jun 2024"
  link?: string; // link para o certificado digital (ex: Credly, Coursera, etc.)
  image?: string; // caminho relativo da imagem (ex: "/certificates/aws-certified.png")
  description?: string;
}