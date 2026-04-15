type InfoCardProps = {
  label: string;
  value: string;
};

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-base font-semibold leading-6 text-slate-900">
        {value}
      </p>
    </div>
  );
}