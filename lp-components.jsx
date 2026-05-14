// lp-components.jsx — Shared UI atoms for CRAZY TIME LP
// Exports to window: Badge, SectionLabel, SectionTitle, GoldLine,
//                    ImgSlot, BenefitRow, BottomCTA

const { useEffect } = React;

/* ── Badge pill ─────────────────────────────────────────── */
const Badge = ({ children, variant = 'gold' }) => {
  const v = {
    gold:    { background: 'var(--gold-pale)',  border: '1px solid var(--gold-light)', color: 'var(--navy)' },
    outline: { background: 'transparent',       border: '1px solid rgba(255,255,255,0.55)', color: 'white' },
    navy:    { background: 'var(--navy)',        border: '1px solid var(--navy)',        color: 'white' },
    soft:    { background: 'var(--beige)',       border: '1px solid var(--beige-mid)',   color: 'var(--text-mid)' },
  };
  return (
    <span style={{
      ...v[variant],
      display: 'inline-flex', alignItems: 'center',
      padding: '5px 13px', borderRadius: '100px',
      fontSize: '12px', fontWeight: '500',
      letterSpacing: '0.04em', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
};

/* ── Section eyebrow label ──────────────────────────────── */
const SectionLabel = ({ children, light = false }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    color: light ? 'var(--gold-light)' : 'var(--gold)',
    fontSize: '10px', fontWeight: '600',
    letterSpacing: '0.22em', marginBottom: '10px',
  }}>
    <div style={{ width: '18px', height: '1px', background: 'currentColor' }} />
    {children}
    <div style={{ width: '18px', height: '1px', background: 'currentColor' }} />
  </div>
);

/* ── Section heading ────────────────────────────────────── */
const SectionTitle = ({ children, light = false, size = 26 }) => (
  <h2 style={{
    fontFamily: 'var(--font-display)',
    fontSize: size + 'px', fontWeight: '600',
    lineHeight: '1.5', letterSpacing: '-0.01em',
    color: light ? 'white' : 'var(--navy)',
    margin: 0, textWrap: 'pretty',
  }}>{children}</h2>
);

/* ── Gold rule ──────────────────────────────────────────── */
const GoldLine = ({ w = '36px', my = '14px' }) => (
  <div style={{ width: w, height: '2px', background: 'var(--gold)', margin: `${my} 0` }} />
);

/* ── Drag-and-drop image slot wrapper ───────────────────── */
const ImgSlot = ({ id, label, height = 220, radius = '12px', style = {} }) => (
  <div style={{ height, borderRadius: radius, overflow: 'hidden', flexShrink: 0, ...style }}>
    <image-slot
      id={id}
      placeholder={label}
      shape="rect"
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  </div>
);

/* ── Benefit list row ───────────────────────────────────── */
const BenefitRow = ({ icon, title, desc, last = false }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '14px',
    padding: '16px 0',
    borderBottom: last ? 'none' : '1px solid oklch(0.92 0.01 85)',
  }}>
    <div style={{
      width: '40px', height: '40px', borderRadius: '10px',
      background: 'var(--gold-pale)', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>{icon}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>{title}</div>
      <div style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{desc}</div>
    </div>
  </div>
);

/* ── Fixed bottom CTA bar ───────────────────────────────── */
const BottomCTA = ({ onApply, onLine, onCall }) => (
  <div style={{
    position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
    width: '100%', maxWidth: '430px',
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(12px)',
    borderTop: '1px solid oklch(0.89 0.02 247)',
    padding: '10px 16px 16px',
    display: 'flex', gap: '8px',
    zIndex: 900,
    boxShadow: '0 -6px 28px rgba(27,43,90,0.10)',
  }}>
    <button onClick={onApply} style={{
      flex: 2, padding: '14px 0',
      background: 'var(--navy)', color: 'white',
      border: 'none', borderRadius: '10px',
      fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', cursor: 'pointer',
    }}>応募する</button>
    <button onClick={onLine} style={{
      flex: 2, padding: '14px 0',
      background: '#06C755', color: 'white',
      border: 'none', borderRadius: '10px',
      fontSize: '13px', fontWeight: '700', cursor: 'pointer',
    }}>LINEで相談</button>
    <button onClick={onCall} style={{
      flex: 1.5, padding: '14px 0',
      background: 'white', color: 'var(--navy)',
      border: '1.5px solid var(--navy)', borderRadius: '10px',
      fontSize: '13px', fontWeight: '700', cursor: 'pointer',
    }}>電話する</button>
  </div>
);

/* ── SVG icon helpers ───────────────────────────────────── */
const Icon = ({ d, size = 20, stroke = 'var(--gold)', sw = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);
const CircleIcon = ({ cx = 12, cy = 12, r = 10, inner, size = 20, stroke = 'var(--gold)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx={cx} cy={cy} r={r} />{inner}
  </svg>
);

Object.assign(window, {
  Badge, SectionLabel, SectionTitle, GoldLine,
  ImgSlot, BenefitRow, BottomCTA, Icon, CircleIcon,
});
