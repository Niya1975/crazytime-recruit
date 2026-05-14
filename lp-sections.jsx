// lp-sections.jsx — All 5 page sections for CRAZY TIME LP

const { useState } = React;

/* ══════════════════════════════════════════════════════════
   SECTION 1 — HERO / FIRST VIEW
══════════════════════════════════════════════════════════ */
const HeroSection = ({ onApply }) => (
  <section id="hero" style={{ position: 'relative', background: 'var(--navy)' }}>
    {/* Brand bar */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 24px',
    }}>
    </div>

    {/* Hero image with overlay */}
    <div style={{ position: 'relative', height: '490px' }}>
      <img src={window.LP_IMAGES.hero} style={{ width: '100%', height: '490px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} alt="ディーラー" />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(15,27,63,0.30) 0%, rgba(15,27,63,0.70) 45%, rgba(15,27,63,0.94) 100%)',
      }} />
      {/* Text content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 32px' }}>
        <div style={{
          fontSize: '10px', fontWeight: '600', letterSpacing: '0.22em',
          color: 'var(--gold-light)', marginBottom: '12px',
        }}>AMUSEMENT POKER DEALER RECRUIT</div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '32px', fontWeight: '600', lineHeight: '1.5',
          color: 'white', letterSpacing: '-0.01em', margin: '0 0 8px',
          textWrap: 'pretty',
        }}>未経験から、<br />楽しく初めて、<br />正しく覚える。</h1>

        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.78)',
          lineHeight: '1.8', margin: '0 0 20px', textWrap: 'pretty',
        }}>
          落ち着いた空間で始める、<br />
          アミューズメントポーカー店でディーラーバイト
        </p>

        {/* Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
          {['時給 1,500円〜', '未経験OK', 'JR新橋駅 徒歩2分', '服装・髪色自由', 'ネイル・ピアスOK'].map(b => (
            <Badge key={b} variant="outline">{b}</Badge>
          ))}
        </div>


      </div>
    </div>

    {/* Scroll cue */}
    <div style={{
      background: 'var(--navy)', textAlign: 'center', padding: '20px 0 8px',
    }}>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path d="M2 2l8 8 8-8" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   SECTION 2 — JOB CONTENT
══════════════════════════════════════════════════════════ */
const JobSection = () => (
  <section id="job" style={{ background: 'white', padding: '56px 24px' }}>
    <div className="reveal" style={{ marginBottom: '10px' }}>
      <SectionLabel>ABOUT THE JOB</SectionLabel>
    </div>
    <div className="reveal" style={{ marginBottom: '32px' }}>
      <SectionTitle>ディーラーの<br />お仕事とは？</SectionTitle>
      <GoldLine />
      <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.9', textWrap: 'pretty' }}>
        本物のチップとカードを使いますが、賭けは一切ありません。
        アミューズメント施設として、ゲームを楽しむお客様の
        接客・進行をサポートするお仕事です。
      </p>
    </div>

    <div className="reveal" style={{ marginBottom: '32px' }}>
      <img src={window.LP_IMAGES.job} style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', display: 'block', borderRadius: '12px' }} alt="カードを配る手元" />
    </div>

    <div className="reveal">
      {[
        { n: '01', title: 'カードをディールする', body: 'ルールに沿ってカードを配ります。手順は研修でしっかり覚えられます。' },
        { n: '02', title: 'ゲームの進行', body: 'ゲームの進行・チップの計算・勝敗判定などを行います。' },
        { n: '03', title: 'ホール業務', body: 'お客様の受付、会計処理、ドリンカー業務などを交代制で行います。' },
      ].map(({ n, title, body }, i, arr) => (
        <div key={n} style={{
          display: 'flex', gap: '16px', alignItems: 'flex-start',
          padding: '18px 0',
          borderBottom: i < arr.length - 1 ? '1px solid oklch(0.93 0.01 85)' : 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '600',
            color: 'var(--gold)', letterSpacing: '0.05em', paddingTop: '3px', minWidth: '26px',
          }}>{n}</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)', marginBottom: '5px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.75' }}>{body}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="reveal" style={{
      marginTop: '28px', padding: '18px 20px',
      background: 'var(--gold-pale)', borderRadius: '10px',
      borderLeft: '3px solid var(--gold)',
    }}>
      <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: '1.85', textWrap: 'pretty' }}>
        一見、難しそうにみえますが、海外では高齢のディーラーさんも多いので、<strong style={{ color: 'var(--navy)' }}>気負わずご応募ください。</strong>
      </p>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   SECTION 3 — BENEFITS & CONDITIONS
══════════════════════════════════════════════════════════ */
const BenefitsSection = () => {
  const items = [
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
      title: '時給 1,500円〜（昇給あり）',
      desc: '経験・スキルに応じて昇給します。長く続けるほど収入アップが目指せます。',
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: 'JR新橋駅 徒歩2分',
      desc: 'JR・東京メトロ・都営が交わる新橋駅からすぐ。帰りも安心の好立地です。',
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
      title: 'シフト自由・週1日〜OK',
      desc: '学校・本業に合わせてシフト調整できます。週1日・1日4h〜相談可。',
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
      title: '髪型・ネイル・ピアス自由',
      desc: '個性を活かして働けます。服装はドレスコードに準じます（支給あり相談可）。',
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: '学生・フリーター・Wワーク歓迎',
      desc: 'さまざまな背景のスタッフが活躍中。はじめての方もお気軽にどうぞ。',
    },
    {
      icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      title: '丁寧な研修制度',
      desc: '未経験者向けの研修を完備。先輩スタッフがマンツーマンでサポートします。',
      last: true,
    },
  ];

  return (
    <section id="benefits" style={{ background: 'var(--ivory)', padding: '56px 24px' }}>
      <div className="reveal" style={{ marginBottom: '10px' }}>
        <SectionLabel>WHY CRAZY TIME</SectionLabel>
      </div>
      <div className="reveal" style={{ marginBottom: '32px' }}>
        <SectionTitle>CRAZY TIMEで<br />働く理由</SectionTitle>
        <GoldLine />
      </div>

      <div className="reveal" style={{ marginBottom: '32px' }}>
        <img src={window.LP_IMAGES.benefits} style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '12px' }} alt="ディーラー" />
      </div>

      <div className="reveal">
        {items.map(item => <BenefitRow key={item.title} {...item} />)}
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   SECTION 4 — APPLICATION FLOW
══════════════════════════════════════════════════════════ */
const FlowSection = ({ onApply }) => {
  const steps = [
    { n: 1, title: 'まずご連絡ください', body: 'WEB・LINE・電話、お好きな方法でOKです。「見学だけ」でも大歓迎。' },
    { n: 2, title: '日程を合わせましょう', body: 'ご都合に合わせて日時を調整します。フレキシブルに対応できます。' },
    { n: 3, title: 'お店見学・面談（約30分）', body: '実際の雰囲気をご覧いただき、疑問にはすべてお答えします。' },
    { n: 4, title: '採用・研修スタート', body: '研修からスタートし、徐々に慣れていただけます。' },
  ];

  return (
    <section id="flow" style={{ background: 'var(--navy)', padding: '56px 24px' }}>
      <div className="reveal" style={{ marginBottom: '10px' }}>
        <SectionLabel light>APPLICATION FLOW</SectionLabel>
      </div>
      <div className="reveal" style={{ marginBottom: '36px' }}>
        <SectionTitle light>応募から<br />スタートまで</SectionTitle>
        <GoldLine />
      </div>

      <div className="reveal">
        {steps.map(({ n, title, body }, i) => (
          <div key={n} style={{ display: 'flex', gap: '18px', paddingBottom: '24px', position: 'relative' }}>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', left: '18px', top: '38px',
                width: '1px', height: 'calc(100% - 14px)',
                background: 'rgba(255,255,255,0.18)',
              }} />
            )}
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'var(--gold)', color: 'var(--navy)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700',
              flexShrink: 0, position: 'relative', zIndex: 1,
            }}>{n}</div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'white', marginBottom: '5px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.62)', lineHeight: '1.75' }}>{body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{
        padding: '22px 20px', marginTop: '4px',
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: '12px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '14px', color: 'white', lineHeight: '1.85', fontWeight: '500' }}>
          話を聞くだけでも、見学だけでも<strong style={{ color: 'var(--gold-light)' }}>OK</strong>です。<br />
          お気軽にご連絡ください。
        </p>
      </div>

      <button onClick={onApply} className="reveal" style={{
        display: 'block', width: '100%', marginTop: '22px', padding: '16px',
        background: 'var(--gold)', color: 'var(--navy)',
        border: 'none', borderRadius: '10px',
        fontSize: '15px', fontWeight: '700', letterSpacing: '0.04em',
        cursor: 'pointer', boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
      }}>今すぐ応募する</button>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   SECTION 5 — CONTACT & APPLICATION FORM
══════════════════════════════════════════════════════════ */
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYgdnWKdAFUeA4FHDbtw4YfFs-sdUxArCl_jPw3bgpSPsqCA/viewform?usp=header';

const FormSection = () => {
  const openForm = () => window.open(GOOGLE_FORM_URL, '_blank', 'noopener');

  return (
    <section id="contact" style={{ background: 'white', padding: '56px 24px 110px' }}>
      <div className="reveal" style={{ marginBottom: '10px' }}>
        <SectionLabel>APPLY NOW</SectionLabel>
      </div>
      <div className="reveal" style={{ marginBottom: '32px' }}>
        <SectionTitle>応募・お問い合わせ</SectionTitle>
        <GoldLine />
        <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.9', textWrap: 'pretty' }}>
          「見学だけ」「話を聞くだけ」でも大歓迎です。<br />
          気になったら、まず気軽にご連絡ください。
        </p>
      </div>

      {/* Main CTA card */}
      <div className="reveal" style={{
        background: 'var(--navy)', borderRadius: '14px',
        padding: '32px 24px', textAlign: 'center', marginBottom: '20px',
      }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'var(--gold)', margin: '0 auto 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '18px',
          color: 'white', marginBottom: '8px', fontWeight: '600',
        }}>Googleフォームで応募・お問い合わせ</h3>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.60)', lineHeight: '1.85', marginBottom: '22px' }}>
          応募・見学希望・ご質問など<br />全てこちらのフォームからお気軽にどうぞ
        </p>
        <button onClick={openForm} style={{
          width: '100%', padding: '15px',
          background: 'var(--gold)', color: 'var(--navy)',
          border: 'none', borderRadius: '10px',
          fontSize: '15px', fontWeight: '700', letterSpacing: '0.04em',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          フォームを開く
        </button>
      </div>

      {/* Note */}
      <p className="reveal" style={{
        fontSize: '12px', color: 'var(--text-light)',
        textAlign: 'center', lineHeight: '1.8',
      }}>
        ご連絡いただいた方には2営業日以内にご返信します。
      </p>

      {/* Shop info */}
      <div className="reveal" style={{
        marginTop: '36px', padding: '24px 20px',
        background: 'var(--ivory)', borderRadius: '12px',
        textAlign: 'center',
      }}>
        {/* Logo — mix-blend-mode removes white bg on light backgrounds */}
        <img src={window.LP_IMAGES.logo}
          alt="CRAZY TIME logo"
          style={{
            width: '100%', maxWidth: '200px',
            display: 'block', margin: '0 auto 16px',
            mixBlendMode: 'multiply',
          }}
        />
        <div style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '2.2' }}>
          <div>〒105-0004</div>
          <div>東京都港区新橋 3-11-2 COZY新橋ビル5階</div>
          <div>JR新橋駅 徒歩2分</div>
          <div>営業時間：18:00 〜 25:00</div>
          <div><a href="https://poker-crazytime.jp/" target="_blank" rel="noopener" style={{ color: 'var(--navy)', textDecoration: 'underline' }}>https://poker-crazytime.jp/</a></div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection, JobSection, BenefitsSection, FlowSection, FormSection });
