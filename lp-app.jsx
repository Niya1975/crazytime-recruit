// lp-app.jsx — App root, scroll-reveal, and Tweaks panel

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "displayFont": "serif"
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  gold:  { '--gold': 'oklch(0.70 0.13 82)',  '--gold-light': 'oklch(0.85 0.09 82)',  '--gold-pale': 'oklch(0.96 0.04 82)'  },
  rose:  { '--gold': 'oklch(0.65 0.13 355)', '--gold-light': 'oklch(0.82 0.08 355)', '--gold-pale': 'oklch(0.96 0.03 355)' },
  sage:  { '--gold': 'oklch(0.58 0.10 158)', '--gold-light': 'oklch(0.78 0.07 158)', '--gold-pale': 'oklch(0.95 0.03 158)' },
};

const App = () => {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [panelOpen, setPanelOpen] = useState(false);

  /* ── Apply CSS variables on tweak change ── */
  useEffect(() => {
    const root = document.documentElement;
    const palette = ACCENT_PALETTES[tweaks.accent] || ACCENT_PALETTES.gold;
    Object.entries(palette).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.setProperty('--font-display',
      tweaks.displayFont === 'serif' ? "'Noto Serif JP', serif" : "'Noto Sans JP', sans-serif"
    );
  }, [tweaks]);

  /* ── Scroll reveal ── */
  useEffect(() => {
    let obs;
    const t = setTimeout(() => {
      obs = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.06 }
      );
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }, 120);
    return () => { clearTimeout(t); obs && obs.disconnect(); };
  }, []);

  /* ── Tweaks host protocol ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode')   setPanelOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setPanelOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const setTweak = (key, value) => {
    const next = { ...tweaks, [key]: value };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
  };

  const closePanel = () => {
    setPanelOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYgdnWKdAFUeA4FHDbtw4YfFs-sdUxArCl_jPw3bgpSPsqCA/viewform?usp=header';
  const LINE_URL = 'https://page.line.me/780ytyyv';

  /* ── Open Google Form ── */
  const scrollToContact = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener');
  };

  const openLine = () => {
    window.open(LINE_URL, '_blank', 'noopener');
  };

  const callPhone = () => {
    window.location.href = 'tel:0367215595';
  };

  return (
    <div className="lp-wrapper">
      <div className="lp-content">
        <HeroSection onApply={scrollToContact} />
        <JobSection />
        <BenefitsSection />
        <FlowSection onApply={scrollToContact} />
        <FormSection />
      </div>

      <BottomCTA onApply={scrollToContact} onLine={openLine} onCall={callPhone} />

      {/* ── Tweaks panel ── */}
      {panelOpen && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '16px', zIndex: 9999,
          background: 'white', borderRadius: '14px',
          boxShadow: '0 8px 32px rgba(27,43,90,0.18)',
          padding: '20px', width: '210px',
          border: '1px solid oklch(0.90 0.02 247)',
          fontFamily: 'var(--font-body)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)', letterSpacing: '0.04em' }}>Tweaks</span>
            <button onClick={closePanel} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-light)', fontSize: '18px', lineHeight: 1, padding: '0 2px',
            }}>×</button>
          </div>

          {/* Accent color */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-mid)', letterSpacing: '0.08em', marginBottom: '10px', textTransform: 'uppercase' }}>アクセントカラー</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { key: 'gold', label: 'ゴールド', color: 'oklch(0.70 0.13 82)' },
                { key: 'rose', label: 'ローズ',   color: 'oklch(0.65 0.13 355)' },
                { key: 'sage', label: 'セージ',   color: 'oklch(0.58 0.10 158)' },
              ].map(({ key, label, color }) => (
                <button key={key} onClick={() => setTweak('accent', key)}
                  title={label}
                  style={{
                    flex: 1, height: '32px', borderRadius: '6px',
                    background: color, cursor: 'pointer',
                    border: tweaks.accent === key ? '2px solid var(--navy)' : '2px solid transparent',
                    outline: tweaks.accent === key ? '2px solid white' : 'none',
                    outlineOffset: '-4px',
                    transition: 'border 0.15s',
                  }} />
              ))}
            </div>
          </div>

          {/* Font style */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-mid)', letterSpacing: '0.08em', marginBottom: '10px', textTransform: 'uppercase' }}>見出しフォント</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { key: 'serif', label: 'セリフ体' },
                { key: 'sans',  label: 'ゴシック体' },
              ].map(({ key, label }) => (
                <button key={key} onClick={() => setTweak('displayFont', key)} style={{
                  flex: 1, padding: '8px 4px', borderRadius: '7px',
                  background: tweaks.displayFont === key ? 'var(--navy)' : 'var(--ivory)',
                  color: tweaks.displayFont === key ? 'white' : 'var(--text-mid)',
                  border: 'none', cursor: 'pointer',
                  fontSize: '12px', fontWeight: '600',
                  transition: 'background 0.15s, color 0.15s',
                }}>{label}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
