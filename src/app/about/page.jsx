import AboutLeadIn from "@/components/about/AboutLeadIn";
import ValueTriad from "@/components/about/ValueTriad";
import PathTrace from "@/components/about/PathTrace";

export default function AboutPage() {
  return (
    <div className="page-shell pb-24 pt-24">
      <AboutLeadIn />
      <ValueTriad />
      <PathTrace />
    </div>
  );
}
