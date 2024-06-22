import Image from "next/image";
import { CalculatorBox } from "./components/Calculator/CalculatorBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalculatorBox />
    </main>
  );
}
