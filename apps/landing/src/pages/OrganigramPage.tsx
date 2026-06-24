export function OrganigramPage() {
  return (
    <div className="w-full flex flex-col items-center py-16">
      {/* Hero Header */}
      <div className="text-center mb-16 max-w-2xl px-margin-mobile">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-4">
          Organizational Hierarchy
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          The structural framework of TISS divisions and operational guilds, mapping the path from foundational learning to executive strategy.
        </p>
      </div>

      {/* Organigram Canvas */}
      <div className="relative w-full flex flex-col items-center gap-16 py-8 px-margin-mobile">
        
        {/* L2: White Teaming */}
        <div className="relative z-10 flex flex-col items-center org-line-down">
          <div className="bg-white-team border border-outline rounded-xl p-6 w-64 text-center shadow-lg dark:shadow-black/20">
            <span
              className="material-symbols-outlined text-inverse-surface mb-2"
              data-icon="account_balance"
              style={{ fontSize: "32px" }}
            >
              account_balance
            </span>
            <h3 className="font-h3 text-h3 text-background">White Teaming</h3>
            <div className="mt-3 inline-block px-3 py-1 rounded-full bg-surface-container/20 border border-outline/30">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                L2 Executive
              </span>
            </div>
          </div>
        </div>

        {/* L1 Primary */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-16 w-full org-line-up org-horizontal-connector">
          {/* Red Team */}
          <div className="bg-surface rounded-xl border-t-4 border-red-team p-6 w-64 text-center shadow-sm border-x border-b border-outline-variant relative org-line-down">
            <h3 className="font-h3 text-h3 text-on-surface">Red Teaming</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              Offensive Security
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-red-team bg-red-team/10 px-2 py-1 rounded inline-block">
              L1 Primary
            </div>
          </div>

          {/* Blue Team */}
          <div className="bg-surface rounded-xl border-t-4 border-blue-team p-6 w-64 text-center shadow-sm border-x border-b border-outline-variant relative org-line-down md:mt-0">
            <h3 className="font-h3 text-h3 text-on-surface">Blue Teaming</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              Defensive Security
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-blue-team bg-blue-team/10 px-2 py-1 rounded inline-block">
              L1 Primary
            </div>
          </div>

          {/* Yellow Team */}
          <div className="bg-surface rounded-xl border-t-4 border-yellow-team p-6 w-64 text-center shadow-sm border-x border-b border-outline-variant relative org-line-down md:mt-0">
            <h3 className="font-h3 text-h3 text-on-surface">Yellow Teaming</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              Architecture &amp; Dev
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-yellow-team bg-yellow-team/10 px-2 py-1 rounded inline-block">
              L1 Primary
            </div>
          </div>
        </div>

        {/* L1 Secondary (Guilds) */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 w-full org-line-up">
          {/* Purple Guild */}
          <div
            className="bg-surface rounded-xl p-6 w-56 text-center shadow-sm border-x border-y border-outline-variant border-l-4 border-r-4"
            style={{ borderLeftColor: "#E8232A", borderRightColor: "#1E6FD9" }}
          >
            <h3 className="font-h3 text-h3 text-purple-guild">Purple Guild</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              Threat Intelligence
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-1 rounded inline-block">
              L1 Secondary
            </div>
          </div>

          {/* Green Guild */}
          <div
            className="bg-surface rounded-xl p-6 w-56 text-center shadow-sm border-x border-y border-outline-variant border-l-4 border-r-4"
            style={{ borderLeftColor: "#1E6FD9", borderRightColor: "#E8B400" }}
          >
            <h3 className="font-h3 text-h3 text-green-guild">Green Guild</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              SecOps Automation
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-1 rounded inline-block">
              L1 Secondary
            </div>
          </div>

          {/* Orange Guild */}
          <div
            className="bg-surface rounded-xl p-6 w-56 text-center shadow-sm border-x border-y border-outline-variant border-l-4 border-r-4"
            style={{ borderLeftColor: "#E8232A", borderRightColor: "#E8B400" }}
          >
            <h3 className="font-h3 text-h3 text-orange-guild">Orange Guild</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
              Vulnerability Research
            </p>
            <div className="mt-4 font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-1 rounded inline-block">
              L1 Secondary
            </div>
          </div>
        </div>

        {/* Spacer for visual separation to L0 */}
        <div className="h-8 w-px bg-outline-variant my-4"></div>

        {/* L0: Null Teaming / Progress Path */}
        <div className="w-full max-w-4xl bg-surface-container-low rounded-xl p-8 border border-outline-variant flex flex-col">
          <div className="text-center mb-8">
            <h3 className="font-h3 text-h3 text-on-surface">Null Teaming (L0)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Foundational Path</p>
          </div>
          
          {/* Horizontal Path */}
          <div className="relative flex flex-col sm:flex-row justify-between items-center w-full px-4 gap-8 sm:gap-0">
            {/* Background Line (Desktop Only) */}
            <div className="hidden sm:block absolute top-1/2 left-0 w-full h-1 bg-surface-variant -translate-y-1/2 z-0 rounded-full"></div>
            
            {/* Nodes */}
            {/* Rank 0: Void */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-dim border-2 border-outline flex items-center justify-center text-on-surface-variant font-bold">
                <span className="font-mono-code text-mono-code text-xs">0</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Void</span>
            </div>

            {/* Rank 1: Cipher */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface border-2 border-blue-team/30 flex items-center justify-center text-on-surface-variant font-bold">
                <span className="font-mono-code text-mono-code text-xs">1</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Cipher</span>
            </div>

            {/* Rank 2: Packet */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface border-2 border-yellow-team/30 flex items-center justify-center text-on-surface-variant font-bold">
                <span className="font-mono-code text-mono-code text-xs">2</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Packet</span>
            </div>

            {/* Rank 3: Forge */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface border-2 border-yellow-team flex items-center justify-center text-yellow-team shadow-sm font-bold">
                <span className="font-mono-code text-mono-code text-xs">3</span>
              </div>
              <span className="font-label-caps text-label-caps text-yellow-team">Forge</span>
            </div>

            {/* Rank 4: Breach */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface border-2 border-red-team flex items-center justify-center text-red-team shadow-sm font-bold">
                <span className="font-mono-code text-mono-code text-xs">4</span>
              </div>
              <span className="font-label-caps text-label-caps text-red-team">Breach</span>
            </div>

            {/* Rank 5: Sentinel */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface border-2 border-blue-team flex items-center justify-center text-blue-team shadow-sm font-bold">
                <span className="font-mono-code text-mono-code text-xs">5</span>
              </div>
              <span className="font-label-caps text-label-caps text-blue-team">Sentinel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
