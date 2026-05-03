export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-[#58a6ff]/10 px-4 py-1 text-sm font-medium text-[#58a6ff] border border-[#58a6ff]/20">
          Health Tracking · Mobile-First
        </span>
        <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          Never Miss a Prescription Refill Again
        </h1>
        <p className="mb-8 max-w-xl text-lg text-[#8b949e]">
          Snap a photo of your pill bottle. Our OCR reads the refill date automatically and sends you smart SMS &amp; email reminders before you run out.
        </p>
        <a
          href={checkoutUrl}
          className="rounded-lg bg-[#58a6ff] px-8 py-3 text-base font-semibold text-[#0d1117] transition hover:bg-[#79b8ff] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required · Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl w-full">
          {[
            { icon: '📸', label: 'Snap a Photo', desc: 'Point your camera at any pill bottle label' },
            { icon: '🔍', label: 'Auto OCR Scan', desc: 'Refill dates extracted instantly, no typing' },
            { icon: '🔔', label: 'Smart Reminders', desc: 'SMS & email alerts days before you run out' },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5 text-left">
              <div className="mb-2 text-2xl">{f.icon}</div>
              <div className="mb-1 font-semibold text-white">{f.label}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16" id="pricing">
        <h2 className="mb-2 text-2xl font-bold text-white">Simple Pricing</h2>
        <p className="mb-10 text-[#8b949e]">One plan. Everything included.</p>
        <div className="w-full max-w-sm rounded-2xl border border-[#58a6ff]/40 bg-[#161b22] p-8 shadow-lg shadow-[#58a6ff]/5">
          <div className="mb-1 text-sm font-medium text-[#58a6ff] uppercase tracking-wider">Pro Plan</div>
          <div className="mb-1 flex items-end gap-1">
            <span className="text-5xl font-bold text-white">$7</span>
            <span className="mb-2 text-[#8b949e]">/mo</span>
          </div>
          <p className="mb-6 text-sm text-[#8b949e]">Everything you need to manage medications for yourself or your family.</p>
          <ul className="mb-8 space-y-3 text-sm">
            {[
              'Unlimited pill bottle scans',
              'SMS & email reminders',
              'Up to 10 medications tracked',
              'Family caregiver sharing',
              'Refill history & reports',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full rounded-lg bg-[#58a6ff] py-3 text-center font-semibold text-[#0d1117] transition hover:bg-[#79b8ff]"
          >
            Get Started — $7/mo
          </a>
          <p className="mt-3 text-center text-xs text-[#8b949e]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 py-16" id="faq">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the photo scanning work?',
              a: 'You snap a photo of your pill bottle label using your phone or computer camera. Our OCR engine (powered by Tesseract.js) reads the text directly in your browser — your photo never leaves your device.',
            },
            {
              q: 'When will I receive reminders?',
              a: 'You choose your reminder schedule: 7 days, 3 days, and 1 day before your refill date. Reminders are sent via SMS and/or email based on your preferences.',
            },
            {
              q: 'Can I manage medications for a family member?',
              a: 'Yes. The Pro plan supports caregiver sharing so you can track and receive reminders for up to 10 medications across your household.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                {q}
                <span className="ml-4 text-[#58a6ff] group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} RxSnap. Built for patients, caregivers, and families.</p>
      </footer>
    </main>
  )
}
