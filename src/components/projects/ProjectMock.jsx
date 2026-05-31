import Icon from '../icons/Icon.jsx';

const ACCENT = 'var(--accent)';
const ACCENT_2 = 'var(--accent-2)';

const padStyle = {
  position: 'absolute',
  inset: 0,
  padding: '16px 18px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

const CINEMA_SELECTED_SEATS = [3, 4, 11, 12, 19];

/** Browser-chrome wrapper shared by every mockup. */
function MockFrame({ name, children }) {
  return (
    <div className="mock">
      <div className="browser">
        <div className="bar">
          <i />
          <i />
          <i />
        </div>
        <div style={{ position: 'relative', height: 'calc(100% - 28px)' }}>{children}</div>
      </div>
      <div className="mname">{name}</div>
    </div>
  );
}

/**
 * Abstract CSS/SVG preview per project motif. A keyed map (rather than an
 * if-chain) keeps this open for extension: add a motif, add an entry.
 */
const MOTIFS = {
  cinema: () => (
    <div style={padStyle}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, height: 7, borderRadius: 4, background: ACCENT }} />
        <div style={{ width: 40, height: 7, borderRadius: 4, background: 'var(--border-strong)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 6, marginTop: 6 }}>
        {Array.from({ length: 40 }).map((_, i) => {
          const selected = CINEMA_SELECTED_SEATS.includes(i);
          return (
            <div
              key={i}
              style={{
                aspectRatio: '1',
                borderRadius: 3,
                background: selected ? ACCENT : i % 7 === 0 ? ACCENT_2 : 'var(--surface-2)',
                opacity: selected ? 1 : 0.6,
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          marginTop: 'auto',
          height: 10,
          borderRadius: 6,
          width: '55%',
          background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_2})`,
        }}
      />
    </div>
  ),

  weather: () => (
    <div style={{ ...padStyle, alignItems: 'center', justifyContent: 'center', gap: 14 }}>
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
          border: `2px solid ${ACCENT}`,
          boxShadow: `0 0 30px ${ACCENT}`,
        }}
      />
      <div style={{ fontFamily: 'var(--mono)', fontSize: 26, fontWeight: 700, color: 'var(--text)' }}>
        21°
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 30,
              height: 44,
              borderRadius: 10,
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
            }}
          />
        ))}
      </div>
    </div>
  ),

  books: () => (
    <div
      style={{ ...padStyle, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start', gap: 9 }}
    >
      {[ACCENT_2, ACCENT, ACCENT_2, ACCENT, ACCENT_2, ACCENT, ACCENT_2, ACCENT].map((c, i) => (
        <div
          key={i}
          style={{
            width: 'calc(25% - 7px)',
            aspectRatio: '0.72',
            borderRadius: 4,
            background: 'var(--surface-2)',
            borderLeft: `4px solid ${c}`,
            border: '1px solid var(--border)',
          }}
        />
      ))}
    </div>
  ),

  food: () => (
    <div style={padStyle}>
      <div
        style={{
          height: 46,
          borderRadius: 8,
          background: `linear-gradient(120deg, ${ACCENT_2}, transparent)`,
          border: '1px solid var(--border)',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginTop: 4 }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 8,
              padding: 8,
              borderRadius: 7,
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 6, background: ACCENT, flex: 'none' }} />
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                justifyContent: 'center',
              }}
            >
              <div style={{ height: 4, borderRadius: 3, background: 'var(--border-strong)', width: '80%' }} />
              <div style={{ height: 4, borderRadius: 3, background: 'var(--border)', width: '50%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  fitness: () => (
    <div style={padStyle}>
      <div style={{ display: 'flex', gap: 8 }}>
        {['72%', '48%', '90%'].map((h, i) => (
          <div
            key={h}
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 8,
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ height: 4, width: '60%', borderRadius: 3, background: 'var(--border-strong)' }} />
            <div
              style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, color: i === 0 ? ACCENT : ACCENT_2 }}
            >
              {h}
            </div>
          </div>
        ))}
      </div>
      <svg
        viewBox="0 0 200 60"
        style={{ width: '100%', marginTop: 8 }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline
          points="0,45 30,38 60,42 90,20 120,28 150,10 200,18"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <polyline
          points="0,55 30,50 60,52 90,40 120,46 150,34 200,40"
          fill="none"
          stroke={ACCENT_2}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  ),

  green: () => (
    <div style={{ ...padStyle, alignItems: 'center', justifyContent: 'center' }}>
      <Icon name="layers" size={46} style={{ color: ACCENT }} />
      <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
        {[ACCENT, ACCENT_2, ACCENT].map((c, i) => (
          <div key={i} style={{ width: 44, height: 8, borderRadius: 5, background: c, opacity: 0.9 - i * 0.2 }} />
        ))}
      </div>
    </div>
  ),

  lang: () => (
    <div style={{ ...padStyle, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Icon name="globe" size={50} style={{ color: ACCENT_2 }} />
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-mute)', letterSpacing: 2 }}>
        EN · ES
      </div>
    </div>
  ),
};

/** @param {{ motif: string, name: string }} props */
export default function ProjectMock({ motif, name }) {
  const renderMotif = MOTIFS[motif];
  return <MockFrame name={name}>{renderMotif ? renderMotif() : <div />}</MockFrame>;
}
