/**
 * Composant serveur qui injecte un JSON-LD schema.org Course
 * sur une page formation. Améliore la visibilité Google (rich snippets).
 *
 * Usage :
 *   <CourseJsonLd
 *     name="Formation habilitation électrique H0B0"
 *     description="..."
 *     courseCode="H0B0"
 *     url="/formation-habilitation-electrique"
 *   />
 */

type CourseJsonLdProps = {
  name: string;
  description: string;
  courseCode?: string;
  url: string;
  /** Mode de dispense : présentiel, e-learning, mixte. */
  educationalCredentialAwarded?: string;
  /** Durée typique au format ISO 8601 (PT7H pour 7 heures, P2D pour 2 jours). */
  timeRequired?: string;
  /** Niveau (ex. "Beginner", "Intermediate", "Advanced"). */
  educationalLevel?: string;
  /** Public cible. */
  audience?: string;
};

const SITE_URL = "https://prevensia-formation.fr";
const PROVIDER = {
  "@type": "Organization",
  name: "PREVENSIA FORMATION",
  sameAs: SITE_URL,
  logo: `${SITE_URL}/images/logo-prevensia-formation.jpg`,
};

export default function CourseJsonLd({
  name,
  description,
  courseCode,
  url,
  educationalCredentialAwarded,
  timeRequired,
  educationalLevel,
  audience,
}: CourseJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: PROVIDER,
    inLanguage: "fr",
    isAccessibleForFree: false,
  };

  if (courseCode) data.courseCode = courseCode;
  if (educationalCredentialAwarded)
    data.educationalCredentialAwarded = educationalCredentialAwarded;
  if (timeRequired) data.timeRequired = timeRequired;
  if (educationalLevel) data.educationalLevel = educationalLevel;
  if (audience) {
    data.audience = {
      "@type": "EducationalAudience",
      audienceType: audience,
    };
  }

  // Métadonnée requise par Google pour les rich snippets Course :
  // hasCourseInstance avec un courseMode et un location.
  data.hasCourseInstance = [
    {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: timeRequired ?? "PT7H",
      location: {
        "@type": "Place",
        name: "PREVENSIA FORMATION (présentiel et intra-entreprise)",
        address: { "@type": "PostalAddress", addressCountry: "FR" },
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: timeRequired ?? "PT7H",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
