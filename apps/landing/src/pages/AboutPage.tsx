export function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-24 py-12 md:py-24">
      {/* Hero Section: The Null Protocol */}
      <section className="mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full w-max">
            <span className="w-2 h-2 rounded-full bg-blue-team"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
              Philosophy
            </span>
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            The Null Protocol
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            At the core of the Tirtayasa Information Security Society lies a fundamental doctrine: security is not a state, but a continuous process of verification, adaptation, and zero-trust foundational principles. We build from the ground up, assuming compromise, and designing for resilience.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="verified_user">
                verified_user
              </span>
              <span className="font-label-caps text-label-caps text-on-surface">
                Zero Trust Architecture
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-guild" data-icon="terminal">
                terminal
              </span>
              <span className="font-label-caps text-label-caps text-on-surface">
                Continuous Validation
              </span>
            </div>
          </div>
        </div>
        
        {/* Photographic Image */}
        <div className="md:col-span-5 relative h-80 rounded-xl overflow-hidden border border-outline-variant bg-surface shadow-sm mt-8 md:mt-0">
          <img
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            alt="InfoSec security operations center."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUUJZY3AZPu9Q-MoNkFjseIr2yDQi-HgMNyzIXrhUEY9Hn5zrr59l0THDEklendOpH_boORUCqnhddWu7Wxnyr89HxmlVVWcTgPOXy1ZpeIbuBkR5YlnY4GVeS2rOs4HMYEcruUu_xZ7UbQSp6qwWj4CqNPm0hjC0MC7N_CkE-5qw9qteLc7zAF_4kSgdEtNibm-xXCdnCcO3d778jcPRAdaTioaPK_FYsDCp6mYlM-DJbcRc-TiLbDtg4_DTJkRo-iGy23HZ2LjM"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low/90 to-transparent"></div>
        </div>
      </section>

      {/* Origins & History */}
      <section className="mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 border-t-2 border-outline-variant pt-4">
          <h2 className="font-h2 text-h2 text-on-surface mb-2">Our Origins</h2>
          <span className="font-label-caps text-label-caps text-on-surface-variant block mb-4">
            Universitas Sultan Ageng Tirtayasa
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Born from a necessity to bridge the gap between theoretical academic knowledge and practical, offensive/defensive cyber operations, TISS was established as a student-led initiative. We recognized that traditional curricula required a dynamic counterpart to keep pace with the rapidly evolving threat landscape.
          </p>
          
          {/* Milestone Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-surface rounded-xl border border-outline-variant flex flex-col gap-4">
              <span className="font-display-lg text-display-lg-mobile text-primary">2021</span>
              <span className="font-label-caps text-label-caps text-on-surface">Establishment</span>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-outline-variant flex flex-col gap-4">
              <span className="font-display-lg text-display-lg-mobile text-green-guild">50+</span>
              <span className="font-label-caps text-label-caps text-on-surface">Active Members</span>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-outline-variant flex flex-col gap-4">
              <span className="font-display-lg text-display-lg-mobile text-red-team">12</span>
              <span className="font-label-caps text-label-caps text-on-surface">CTF Podiums</span>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Topology */}
      <section className="mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-h1 text-h1 text-on-surface tracking-tight">Organizational Topology</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Structured for agility and depth, our organization mirrors complex security architectures, divided into three core operational layers.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* L0 Card */}
          <div className="bg-surface rounded-xl border border-outline-variant p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-on-surface">layers</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Level 0</span>
              <h3 className="font-h2 text-h2 text-on-surface">Foundational</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The Academy. Dedicated to knowledge transfer, basic training, and onboarding new recruits into the InfoSec mindset.
            </p>
            <div className="mt-auto pt-6 border-t border-outline-variant/50">
              <span className="inline-flex items-center gap-2 font-mono-code text-mono-code text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-outline"></span> Base Knowledge
              </span>
            </div>
          </div>

          {/* L1 Card */}
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined">network_node</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps text-primary font-bold">Level 1</span>
              <h3 className="font-h2 text-h2 text-on-surface">Operational</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The core teams: Red, Blue, and Yellow. Executing CTFs, managing infrastructure, and conducting active research projects.
            </p>
            <div className="mt-auto pt-6 border-t border-primary/20 flex gap-2">
              <span className="w-3 h-3 rounded-sm bg-red-team"></span>
              <span className="w-3 h-3 rounded-sm bg-blue-team"></span>
              <span className="w-3 h-3 rounded-sm bg-white-team border border-outline-variant"></span>
            </div>
          </div>

          {/* L2 Card */}
          <div className="bg-surface rounded-xl border border-outline-variant p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-guild to-tertiary-container"></div>
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-purple-guild">admin_panel_settings</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Level 2</span>
              <h3 className="font-h2 text-h2 text-on-surface">Executive</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Strategic oversight, partnership management, and maintaining the structural integrity of the entire society.
            </p>
            <div className="mt-auto pt-6 border-t border-outline-variant/50">
              <span className="inline-flex items-center gap-2 font-mono-code text-mono-code text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-purple-guild"></span> Strategic Command
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Vision Card */}
        <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-h1 text-blue-team" data-icon="visibility">
              visibility
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">Vision</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            To be the premier center of excellence for information security within the academic sphere of Indonesia, forging ethical practitioners who are equipped to secure the digital future through rigorous technical discipline and collaborative innovation.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-h1 text-red-team" data-icon="flag">
              flag
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">Mission</h2>
          </div>
          <ul className="font-body-md text-body-md text-on-surface-variant space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1 text-sm">
                chevron_right
              </span>
              <span>Cultivate a deep understanding of cyber warfare mechanics through hands-on simulations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1 text-sm">
                chevron_right
              </span>
              <span>Establish robust, defensive architectures leveraging the latest in Zero Trust methodologies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1 text-sm">
                chevron_right
              </span>
              <span>Foster a community of continuous learning, responsible disclosure, and ethical hacking.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
