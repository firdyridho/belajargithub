export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-outline-variant bg-surface-container-low text-primary py-12">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <div className="font-display-lg text-h3 font-bold text-on-surface">TISS</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tirtayasa Information Security Society.
            <br />
            Advancing digital resilience.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex flex-col gap-4 md:col-span-3">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Column 1: Platform */}
            <div className="flex flex-col gap-3">
              <h4 className="font-label-caps text-label-caps text-on-surface font-bold mb-2">
                Platform
              </h4>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Academy
              </a>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                LMS
              </a>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                CMS
              </a>
            </div>

            {/* Column 2: Systems */}
            <div className="flex flex-col gap-3">
              <h4 className="font-label-caps text-label-caps text-on-surface font-bold mb-2">
                Systems
              </h4>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Monitor
              </a>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Admin
              </a>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Status
              </a>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-3">
              <h4 className="font-label-caps text-label-caps text-on-surface font-bold mb-2">
                Legal
              </h4>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="w-max font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:underline decoration-primary underline-offset-4 transition-colors focus:outline-none focus:ring-2 ring-primary rounded-sm"
                href="#"
              >
                Code of Conduct
              </a>
            </div>
          </div>

          <div className="mt-8 font-body-md text-body-md text-on-surface-variant">
            © 2024 Tirtayasa Information Security Society. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
