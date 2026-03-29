import HomeSpotlight from "@/components/home/HomeSpotlight";
import WorkStrip from "@/components/home/WorkStrip";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeSpotlight />
      <WorkStrip />
    </div>
  );
}
