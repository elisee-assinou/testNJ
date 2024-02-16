import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>APP PAGE</h1>

      <div className="flex gap-4">
        <p>
          <Link href="/meals"> Meals</Link>
        </p>
        <p>
          <Link href="/meals/share"> Share meal</Link>
        </p>
        <p>
          <Link href="/community"> Community</Link>
        </p>
      </div>
    </main>
  );
}
