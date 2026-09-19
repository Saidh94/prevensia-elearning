import Image from "next/image";
import { COMPANY } from "@/lib/company";

/**
 * Affiche le logo officiel Qualiopi UNIQUEMENT une fois la certification
 * réellement obtenue (COMPANY.qualiopiObtenu === true). Le logo "processus
 * certifié" est une marque réglementée dont l'usage est réservé aux
 * organismes effectivement certifiés — l'afficher pendant une démarche en
 * cours (audit non encore passé) constituerait un usage abusif de la marque
 * et une allégation commerciale trompeuse.
 *
 * Tant que la certification n'est pas obtenue, un badge neutre (icône +
 * texte "Démarche Qualiopi engagée") est utilisé à la place.
 */
export function QualiopiMark({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  if (COMPANY.qualiopiObtenu) {
    return (
      <Image
        src="/images/qualiopi.jpg"
        alt="Certification Qualiopi"
        width={size}
        height={size}
        className={className}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-2 border-current ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2 fill-current">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.2 13.6-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6z" />
      </svg>
    </span>
  );
}
