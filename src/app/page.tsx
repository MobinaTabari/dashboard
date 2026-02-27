import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen gap-4 flex-col items-center justify-center bg-[#3d3838] font-sans dark:bg-white">
      <h1 className="text-white text-2xl">Welcome our Website !</h1>
      <div className="flex flex-col gap-1">
        <button className="bg-white rounded-2xl p-2 border-[#2d2929] border-[3px]">
          <Link href="/dashboard">Dashboard</Link>
        </button>
        <button className="bg-white rounded-2xl p-2 border-[#2d2929] border-[3px]">
          <Link href="/event">Events</Link>
        </button>

      </div>

    </div>
  );
}
