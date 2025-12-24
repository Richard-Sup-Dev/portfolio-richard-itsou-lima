import Image from "next/image";
import { Certification } from "../data/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={certification.image || "/certificates/placeholder.png"}
          alt={certification.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {certification.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {certification.issuer}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          {certification.date}
        </p>
        {certification.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {certification.description}
          </p>
        )}
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Ver certificado →
          </a>
        )}
      </div>
    </div>
  );
}