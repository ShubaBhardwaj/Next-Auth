'use client';

export default function Login() {
  return (
    // Reusing the same forced dark theme background and container structure
    <div className="flex min-h-screen flex-col items-center justify-center bg-black font-sans text-white">
      <main className="flex w-full max-w-sm flex-col items-center justify-center gap-8 px-8 py-24 sm:px-0">
        
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <a href="/" className="mb-6">
            <img
              className="invert transition-opacity hover:opacity-80"
              src="/supermen_BgRm.png"
              alt="supermen logo"
              width={100}
              height={20}
            />
          </a>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your credentials to access your account.
          </p>
        </div>

        <form 
          className="flex w-full flex-col gap-5"
          onSubmit={(e) => e.preventDefault()} // Prevents actual submission in this preview
        >
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
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-zinc-300">
                Password
              </label>
              <a 
                href="#" 
                className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Forgot password?
              </a>
            </div>
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
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Don't have an account?{' '}
          <a
            href="/register"
            className="font-semibold text-white transition-colors hover:underline"
          >
            Register
          </a>
        </p>

      </main>
    </div>
  );
}