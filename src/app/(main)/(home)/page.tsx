import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-4xl">Auth Project</div>
      <div className="flex gap-4 justify-center text-lg">
        <Link href="/sign-up">Sign up</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
