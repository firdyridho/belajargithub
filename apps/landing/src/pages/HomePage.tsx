interface HomePageProps {
  onOpenJoinModal: () => void
}

export function HomePage({ onOpenJoinModal }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        {/* Decorative cyber background */}
        <div className="absolute inset-0 bg-cyber-pattern opacity-30 pointer-events-none z-0"></div>

        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter items-center relative z-10 md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-8">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
              Securing the Future of <br />
              <span className="full-spectrum-gradient text-transparent">Digital Architecture.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Tirtayasa Information Security Society is a multi-disciplinary technical collective dedicated to advancing security standards, rigorous training, and threat intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2 dark:shadow-[0_0_15px_rgba(30,111,217,0.3)]"
                onClick={onOpenJoinModal}
                type="button"
              >
                Enter the Academy
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                className="border border-outline text-on-surface font-label-caps text-label-caps px-8 py-3 rounded hover:bg-surface-container-high transition-colors"
                onClick={onOpenJoinModal}
                type="button"
              >
                View Documentation
              </button>
            </div>
          </div>

          {/* Hero Image / Logo */}
          <div className="flex justify-center md:justify-end relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-tertiary-container/20 blur-[80px] rounded-full z-0 dark:from-primary-container/10 dark:to-purple-guild/10"></div>
            <img
              alt="TISS Core Logo"
              className="relative z-10 w-full max-w-[400px] h-auto object-contain dark:brightness-110 dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN7wBBkur7LdauXqyL0GMK26Vv1uNPx18IaPIRgIDVpAgaaStFDoNboM0y-Nfh6Vl0qdLSR9v5fb8MupGhvqV4wxlCnWvxKqZ2Me91XIJRDfucufppJ1roB3O_-qLk-O7iRzRerrTSH6CK9wgfNfPbg2eAk9GedFAfAVepNAFAoFDunuOMlZHx6grJ1BGccKU4TCMlyR5gL-F5QsxsCx1mSNeqk5v_9jpqACq41KZJi7MQSVK6B7U0kmA0AFdCSrUAaClquOwNrc4"
            />
          </div>
        </div>
      </section>

      {/* The Null Protocol (Terminal / Cyber-Technical Edge) */}
      <section className="bg-surface px-margin-mobile py-24 border-y border-outline-variant md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-h1 text-h1 text-on-surface">The Null Protocol</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our foundational curriculum designed to tear down assumptions and build a ground-up understanding of system architecture, networking, and adversarial mindsets. Step into the simulated environment and elevate your clearance from L0 to L2.
              </p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-on-surface font-body-md text-body-md">
                  <span className="material-symbols-outlined text-green-guild dark:drop-shadow-[0_0_8px_rgba(46,158,91,0.5)]">
                    check_circle
                  </span>
                  Fully isolated container environments
                </li>
                <li className="flex items-center gap-3 text-on-surface font-body-md text-body-md">
                  <span className="material-symbols-outlined text-green-guild dark:drop-shadow-[0_0_8px_rgba(46,158,91,0.5)]">
                    check_circle
                  </span>
                  Real-world vulnerability simulation
                </li>
                <li className="flex items-center gap-3 text-on-surface font-body-md text-body-md">
                  <span className="material-symbols-outlined text-green-guild dark:drop-shadow-[0_0_8px_rgba(46,158,91,0.5)]">
                    check_circle
                  </span>
                  Automated grading via internal CMS
                </li>
              </ul>
            </div>

            {/* Right: Terminal Window */}
            <div className="lg:col-span-7 bg-[#050505] rounded-xl border border-outline-variant overflow-hidden flex flex-col w-full min-h-[300px] shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Terminal Header */}
              <div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-outline-variant">
                <div className="w-3 h-3 rounded-full bg-red-team dark:shadow-[0_0_5px_rgba(232,35,42,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-team dark:shadow-[0_0_5px_rgba(232,180,0,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-guild dark:shadow-[0_0_5px_rgba(46,158,91,0.5)]"></div>
                <span className="ml-4 font-mono-code text-mono-code text-on-surface-variant text-[12px]">
                  user@tiss-core:~
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono-code text-mono-code text-green-guild flex-grow overflow-x-auto dark:text-shadow-[0_0_2px_rgba(46,158,91,0.3)]">
                <div className="mb-2">
                  <span className="text-blue-team">user@tiss-core:~$</span> ./init_null_protocol.sh
                </div>
                <div className="text-on-surface-variant mb-1">
                  [+] Authenticating user... <span className="text-green-guild font-bold">SUCCESS</span>
                </div>
                <div className="text-on-surface-variant mb-1">[+] Provisioning L0 Sandbox container...</div>
                <div className="text-on-surface-variant mb-1">[+] Attaching to network veth_secure...</div>
                <div className="text-status-degraded mb-1 font-bold">
                  [!] Warning: Defensive measures simulated at minimal capacity.
                </div>
                <div className="text-on-surface-variant mb-4">[+] Environment ready.</div>
                <div className="flex items-center">
                  <span className="text-blue-team">user@sandbox-L0:~$</span>{" "}
                  <span className="ml-2 w-2 h-4 bg-green-guild animate-pulse inline-block dark:shadow-[0_0_8px_rgba(46,158,91,0.8)]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="bg-surface-container-low px-margin-mobile py-16 border-b border-outline-variant md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {/* Metric 1 */}
            <div className="flex flex-col gap-2">
              <span className="font-display-lg text-h1 text-blue-team md:text-display-lg dark:drop-shadow-[0_0_10px_rgba(30,111,217,0.3)]">
                2026
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Established
              </span>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col gap-2">
              <span className="font-display-lg text-h1 text-green-guild md:text-display-lg dark:drop-shadow-[0_0_10px_rgba(46,158,91,0.3)]">
                50+
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Active Members
              </span>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col gap-2">
              <span className="font-display-lg text-h1 text-orange-guild md:text-display-lg dark:drop-shadow-[0_0_10px_rgba(232,130,30,0.3)]">
                12+
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Technical Briefs
              </span>
            </div>
            {/* Metric 4 */}
            <div className="flex flex-col gap-2">
              <span className="font-display-lg text-h1 text-red-team md:text-display-lg dark:drop-shadow-[0_0_10px_rgba(232,35,42,0.3)]">
                24
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Curriculum Weeks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="bg-surface-container-lowest px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="text-center mb-16">
            <h2 className="font-h1 text-h1 text-on-surface mb-4">Core Operational Pillars</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              TISS is structured into functional teams. Each pillar operates independently but integrates seamlessly to simulate full-spectrum cyber operations.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {/* Red Team Card */}
            <div className="bg-surface rounded-xl border-t-4 border-t-red-team border-x border-b border-outline-variant p-8 flex flex-col hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(232,35,42,0.15)] transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-team/5 rounded-bl-full -z-10 group-hover:bg-red-team/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-lg bg-red-team/10 flex items-center justify-center mb-6 border border-red-team/20">
                <span
                  className="material-symbols-outlined text-red-team dark:drop-shadow-[0_0_8px_rgba(232,35,42,0.5)]"
                  data-icon="security"
                >
                  security
                </span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">Red Team</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                Offensive security, penetration testing, and adversarial emulation. Pushing systems to their absolute breaking point.
              </p>
              <button
                className="inline-flex items-center text-left text-red-team font-label-caps text-label-caps hover:underline underline-offset-4 mt-auto group-hover:drop-shadow-[0_0_8px_rgba(232,35,42,0.5)] transition-all"
                onClick={onOpenJoinModal}
                type="button"
              >
                Explore Offense{" "}
                <span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
              </button>
            </div>

            {/* Blue Team Card */}
            <div className="bg-surface rounded-xl border-t-4 border-t-blue-team border-x border-b border-outline-variant p-8 flex flex-col hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(30,111,217,0.15)] transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-team/5 rounded-bl-full -z-10 group-hover:bg-blue-team/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-lg bg-blue-team/10 flex items-center justify-center mb-6 border border-blue-team/20">
                <span
                  className="material-symbols-outlined text-blue-team dark:drop-shadow-[0_0_8px_rgba(30,111,217,0.5)]"
                  data-icon="shield"
                >
                  shield
                </span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">Blue Team</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                Defensive architecture, SOC operations, and incident response. Building resilient systems that withstand assault.
              </p>
              <button
                className="inline-flex items-center text-left text-blue-team font-label-caps text-label-caps hover:underline underline-offset-4 mt-auto group-hover:drop-shadow-[0_0_8px_rgba(30,111,217,0.5)] transition-all"
                onClick={onOpenJoinModal}
                type="button"
              >
                Explore Defense{" "}
                <span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
              </button>
            </div>

            {/* Yellow Team Card */}
            <div className="bg-surface rounded-xl border-t-4 border-t-yellow-team border-x border-b border-outline-variant p-8 flex flex-col hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(232,180,0,0.15)] transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-team/5 rounded-bl-full -z-10 group-hover:bg-yellow-team/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-lg bg-yellow-team/10 flex items-center justify-center mb-6 border border-yellow-team/20">
                <span
                  className="material-symbols-outlined text-yellow-team dark:drop-shadow-[0_0_8px_rgba(232,180,0,0.5)]"
                  data-icon="architecture"
                >
                  architecture
                </span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">Yellow Team</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                Systems architecture, infrastructure deployment, and malware analysis. The foundational builders and reverse engineers.
              </p>
              <button
                className="inline-flex items-center text-left text-yellow-team font-label-caps text-label-caps hover:underline underline-offset-4 mt-auto group-hover:drop-shadow-[0_0_8px_rgba(232,180,0,0.5)] transition-all"
                onClick={onOpenJoinModal}
                type="button"
              >
                Explore Architecture{" "}
                <span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
