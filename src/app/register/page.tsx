'use client';
export default function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black font-sans text-white">
      <main className="flex w-full max-w-sm flex-col items-center justify-center gap-8 px-8 py-24 sm:px-0">
        
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <a href="/" className="mb-6">
            <img
              className="invert transition-opacity hover:opacity-80"
              src="/supermen_BgRm.png"
              alt="Next.js logo"
              width={80}
              height={16}
            />
          </a>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
            Create an account
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your details below to get started.
          </p>
        </div>

        <form 
          className="flex w-full flex-col gap-5"
          onSubmit={(e) => e.preventDefault()} // Prevents actual submission in this preview
        >
          {/* Name Input Groups */}
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex w-full flex-col gap-2 text-left">
              <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-500"
              />
            </div>
            <div className="flex w-full flex-col gap-2 text-left">
              <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-500"
              />
            </div>
          </div>

          {/* Email Input Group */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          {/* Password Input Group */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="password" className="text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-semibold text-white transition-colors hover:underline"
          >
            Sign in
          </a>
        </p>

      </main>
    </div>
  );
}