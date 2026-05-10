import type { AnimationKey } from "@/lib/supabase/elearning/module-types";
import dynamic from "next/dynamic";

const ANIMATION_MAP: Record<AnimationKey, React.ComponentType> = {
  "triangle-du-feu": dynamic(() => import("./TriangleDuFeu")),
  "zones-voisinage-bt": dynamic(() => import("./ZonesVoisinageBt")),
  "peas-sst": dynamic(() => import("./PeasSst")),
  "consignation-chaine": dynamic(() => import("./ConsignationChaine")),
  "classes-extincteurs": dynamic(() => import("./ClassesExtincteurs")),
  "niveaux-vehicules": dynamic(() => import("./NiveauxVehicules")),
};

export default function AnimationRenderer({ animationKey }: { animationKey: AnimationKey }) {
  const Component = ANIMATION_MAP[animationKey];
  if (!Component) return null;
  return <Component />;
}
