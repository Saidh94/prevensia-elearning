/**
 * Injecte un JSON-LD FAQPage (schema.org) pour activer les rich snippets
 * "Questions fréquentes" directement dans les résultats Google.
 *
 * Usage :
 *   <FaqJsonLd items={[
 *     { question: "...", answer: "..." },
 *   ]} />
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
