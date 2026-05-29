import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  ChefHat,
  Clock3,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";

const stats = [
  { value: "18 min", label: "average daily workout" },
  { value: "3.2x", label: "plan adherence lift" },
  { value: "24/7", label: "adaptive coaching" },
];

const features = [
  {
    icon: HeartPulse,
    title: "Biometric onboarding",
    copy: "Age, height, weight, activity level, goals, schedule, and dietary preferences become one usable coaching profile.",
  },
  {
    icon: Dumbbell,
    title: "Workout plans that flex",
    copy: "AI builds strength, cardio, mobility, and recovery blocks around your calendar, equipment, and fatigue signals.",
  },
  {
    icon: ChefHat,
    title: "Nutrition without guesswork",
    copy: "Personalized calories, macros, meals, and swaps that fit office days, travel days, and late meetings.",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    copy: "Log meals, workouts, body metrics, and energy. See trend lines that explain what to adjust next.",
  },
];

const weeklyPlan = [
  { day: "Mon", focus: "Upper strength", time: "22 min", tone: "bg-lime-300 text-zinc-950" },
  { day: "Tue", focus: "Protein reset", time: "4 meals", tone: "bg-orange-300 text-zinc-950" },
  { day: "Wed", focus: "Zone 2 cardio", time: "28 min", tone: "bg-cyan-300 text-zinc-950" },
  { day: "Thu", focus: "Mobility stack", time: "12 min", tone: "bg-white text-zinc-950" },
];

const planTiers = [
  "Personalized workout generation",
  "AI nutrition planning",
  "Meal and exercise logging",
  "Progress dashboard",
  "Premium adaptive coaching",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10140f] text-stone-50">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(190,255,89,0.22),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(45,212,191,0.18),transparent_30%),linear-gradient(135deg,#10140f_0%,#15170f_48%,#090b08_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="absolute -left-24 top-32 -z-10 h-80 w-80 rounded-full border border-lime-300/30" />
        <div className="absolute right-[-9rem] top-20 -z-10 h-[34rem] w-[34rem] rotate-12 rounded-[5rem] border border-orange-300/20 bg-white/[0.03]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3" aria-label="FitForge home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-300 text-zinc-950 shadow-[0_0_28px_rgba(190,255,89,0.45)]">
              <Activity className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-xl tracking-tight text-white">FitForge</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-stone-300 md:flex">
            <a href="#coach" className="transition hover:text-lime-200">Coach</a>
            <a href="#plans" className="transition hover:text-lime-200">Plans</a>
            <a href="#pricing" className="transition hover:text-lime-200">Pricing</a>
          </div>
          <Link
            href="/sign-in"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-lime-200 hover:bg-lime-200 hover:text-zinc-950"
          >
            Sign in
          </Link>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-sm font-medium text-lime-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI coach for busy professionals
            </div>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Fitness plans that behave like a second brain.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              FitForge turns biometrics, calendar pressure, food preferences, and progress logs into workouts and nutrition you can follow between meetings.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-up"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-base font-black text-zinc-950 shadow-[0_18px_70px_rgba(190,255,89,0.28)] transition hover:-translate-y-0.5 hover:bg-lime-200"
              >
                Start coaching
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="#coach"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-bold text-white transition hover:border-white/35 hover:bg-white/[0.08]"
              >
                See how it works
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <dt className="text-2xl font-black text-lime-200">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-stone-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[4rem] bg-lime-300/10 blur-3xl" />
            <div className="rotate-1 rounded-[2rem] border border-white/12 bg-[#171c13]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-400">Today&apos;s adaptive plan</p>
                  <h2 className="mt-1 font-serif text-3xl tracking-tight">Executive Cut</h2>
                </div>
                <div className="rounded-full bg-orange-300 px-3 py-1 text-sm font-black text-zinc-950">82% ready</div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[1.5rem] bg-lime-300 p-5 text-zinc-950">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-lime-200">
                        <Target className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-70">Workout</p>
                        <p className="text-2xl font-black tracking-tight">Push + intervals</p>
                      </div>
                    </div>
                    <p className="font-black">26 min</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm font-bold">
                    <span className="rounded-full bg-zinc-950/10 px-3 py-2">DB press</span>
                    <span className="rounded-full bg-zinc-950/10 px-3 py-2">Rows</span>
                    <span className="rounded-full bg-zinc-950/10 px-3 py-2">Bike</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                    <Utensils className="mb-4 h-6 w-6 text-orange-200" aria-hidden="true" />
                    <p className="text-sm text-stone-400">Macro target</p>
                    <p className="mt-1 text-2xl font-black">2,140 kcal</p>
                    <p className="mt-3 text-sm text-stone-300">172g protein focus</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                    <Clock3 className="mb-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                    <p className="text-sm text-stone-400">Best window</p>
                    <p className="mt-1 text-2xl font-black">6:20 PM</p>
                    <p className="mt-3 text-sm text-stone-300">after commute recovery</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-stone-400">Week scan</p>
                  <div className="grid gap-2">
                    {weeklyPlan.map((item) => (
                      <div key={item.day} className="flex items-center justify-between rounded-2xl bg-black/25 p-3">
                        <div className="flex items-center gap-3">
                          <span className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-black ${item.tone}`}>{item.day}</span>
                          <span className="font-bold text-white">{item.focus}</span>
                        </div>
                        <span className="text-sm text-stone-400">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coach" className="bg-stone-100 px-6 py-24 text-zinc-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-700">Coach engine</p>
              <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                One profile. Daily decisions handled.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-700">
              Built for professionals who need precision, not motivation posters. Every recommendation connects to biometric inputs, goal state, schedule constraints, and logged behavior.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="group rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_rgba(16,20,15,0.08)] transition hover:-translate-y-1 hover:border-lime-300">
                  <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-zinc-950 text-lime-200 transition group-hover:rotate-6 group-hover:bg-lime-300 group-hover:text-zinc-950">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{feature.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="plans" className="relative bg-[#f0e5cf] px-6 py-24 text-zinc-950 sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-950/20 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2.5rem] border-2 border-zinc-950 bg-[#fffbef] p-5 shadow-[12px_12px_0_#10140f]">
            <div className="rounded-[2rem] bg-zinc-950 p-6 text-white">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-serif text-3xl tracking-tight">Progress cockpit</h3>
                <ShieldCheck className="h-7 w-7 text-lime-300" aria-hidden="true" />
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-white/8 p-5">
                  <div className="mb-3 flex items-center justify-between text-sm text-stone-300">
                    <span>Strength consistency</span>
                    <span>74%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[74%] rounded-full bg-lime-300" />
                  </div>
                </div>
                <div className="rounded-3xl bg-white/8 p-5">
                  <div className="mb-3 flex items-center justify-between text-sm text-stone-300">
                    <span>Protein adherence</span>
                    <span>91%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[91%] rounded-full bg-orange-300" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-sm text-stone-400">Logged</p>
                    <p className="mt-1 text-2xl font-black">16</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-sm text-stone-400">Streak</p>
                    <p className="mt-1 text-2xl font-black">9d</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-sm text-stone-400">Trend</p>
                    <p className="mt-1 text-2xl font-black text-lime-300">+12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Track, adapt, repeat</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Your plan changes when your life does.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              Miss a workout, eat out, sleep poorly, or hit a milestone. FitForge recalibrates next steps instead of making you restart.
            </p>
            <div className="mt-8 grid gap-3">
              {planTiers.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-zinc-950/10 bg-white/45 px-4 py-3 font-bold">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-950 text-lime-200">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#10140f] px-6 py-24 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-black/30 sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-200">Premium coaching</p>
          <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl">
            Built for six-month transformation, priced for daily use.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Start free with onboarding and sample plans. Upgrade for adaptive AI coaching, full nutrition planning, and progress intelligence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-base font-black text-zinc-950 transition hover:bg-lime-200"
            >
              Create free account
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white transition hover:border-white/35 hover:bg-white/[0.08]"
            >
              View premium plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
