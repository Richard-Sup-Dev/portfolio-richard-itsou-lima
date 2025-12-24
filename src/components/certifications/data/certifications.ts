import { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Jun 2024",
    link: "https://www.credly.com/badges/xxxx",
    image: "/certificates/aws-certified-developer.png",
    description: "Certificação focada em desenvolvimento de aplicações na AWS.",
  },
  {
    id: 2,
    title: "Full-Stack Open (University of Helsinki)",
    issuer: "University of Helsinki",
    date: "Dez 2023",
    link: "https://studies.cs.helsinki.fi/fullstackopen/",
    image: "/certificates/fullstack-open.png",
    description: "Curso completo de React, Node.js, GraphQL, TypeScript e MongoDB.",
  },
  // adicione mais aqui conforme necessário
];