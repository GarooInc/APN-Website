import { useFadeIn } from '../hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';

export default function Evidence() {
  useFadeIn();
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section style={{ margin: 0, padding: 0, lineHeight: 0, position: 'relative' }}>
        <img
          src="/image6.jpg"
          alt="Generación de Evidencia"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            height: 'clamp(220px, 35vw, 460px)',
            objectPosition: 'center 30%',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,61,167,0.45)' }} />
      </section>

      {/* En Construcción */}
      <section
        className="fade-in"
        style={{
          backgroundColor: '#003da7',
          padding: 'clamp(60px, 10vw, 130px) clamp(32px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Ícono */}
          <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="35" stroke="#00a1e0" strokeWidth="2" />
              <path d="M22 50L36 24L50 50H22Z" stroke="#00a1e0" strokeWidth="2" strokeLinejoin="round" fill="none"/>
              <rect x="34" y="38" width="4" height="4" rx="1" fill="#00a1e0"/>
              <rect x="34" y="30" width="4" height="6" rx="1" fill="#00a1e0"/>
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(20px, 4vw, 36px)',
              letterSpacing: '0.1em',
              color: '#fff',
              textTransform: 'uppercase',
              marginBottom: 'clamp(12px, 2vw, 20px)',
              marginTop: 0,
            }}
          >
            Generación de Evidencia
          </h1>

          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: '#00a1e0',
              margin: '0 auto clamp(24px, 4vw, 40px)',
              borderRadius: 2,
            }}
          />

          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(18px, 3.5vw, 30px)',
              color: '#00a1e0',
              letterSpacing: '0.08em',
              marginBottom: 'clamp(16px, 2.5vw, 24px)',
              marginTop: 0,
            }}
          >
            Página en construcción
          </p>

          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 2.2vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.82)',
              marginBottom: 'clamp(32px, 5vw, 56px)',
            }}
          >
            Estamos trabajando para traerte contenido sobre nuestros proyectos de investigación, metodologías y resultados de la generación de evidencia para combatir la <strong style={{ fontWeight: 700, fontStyle: 'normal', color: '#fff' }}>Desnutrición Crónica Infantil</strong> en Guatemala. Pronto estará disponible.
          </p>

          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #00a1e0',
              color: '#00a1e0',
              borderRadius: 4,
              padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 48px)',
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(12px, 1.8vw, 15px)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#00a1e0'; e.target.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00a1e0'; }}
          >
            ← Volver al inicio
          </button>
        </div>
      </section>

      {/* Imagen cierre */}
      <section style={{ margin: 0, padding: 0, lineHeight: 0 }}>
        <img
          src="/image7.jpg"
          alt="Niños"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            height: 'clamp(180px, 25vw, 320px)',
            objectPosition: 'center 35%',
          }}
        />
      </section>
    </div>
  );
}
