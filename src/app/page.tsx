import Image from "next/image";

export default function Home() {
  return (
    // Forced dark theme background (bg-black) and light text (text-white)
    <div className="flex min-h-screen flex-col items-center justify-center bg-black font-sans text-white">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-12 px-8 py-24 text-center sm:items-start sm:px-16 sm:text-left">
        
        <img
          className="invert" // Inverted so the black Next.js logo shows up white on the dark background
          src="/supermen_BgRm.png"
          alt="supermen logo"
          width={100}
          height={20}
        />

        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Welcome to the Supermen NextAut Boilerplate
          </h1>
          <p className="max-w-md text-lg text-zinc-400">
            Get started by logging into your account or creating a new one today.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 text-base font-medium sm:w-auto sm:flex-row">
          {/* Login Button - Solid Primary Style */}
          <a
            href="/login"
            className="flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-black transition-colors hover:bg-zinc-200 md:w-39.5"
          >
            Login
          </a>
          
          {/* Register Button - Outlined Secondary Style */}
          <a
            href="/register"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-zinc-700 px-8 text-white transition-colors hover:bg-zinc-900 md:w-39.5"
          >
            Register
          </a>
        </div>
      </main>
    </div>
  );
}