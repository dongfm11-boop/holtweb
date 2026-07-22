import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const highlights = [
  {
    icon: HeartHandshake,
    title: '따뜻한 첫인상',
    text: '방문자가 캠페인의 취지를 빠르게 이해하도록 핵심 메시지를 전면에 배치합니다.',
  },
  {
    icon: ShieldCheck,
    title: '신뢰감 있는 구성',
    text: '소개, 참여 방법, 문의 동선을 단순하게 정리해 망설임 없이 이동할 수 있게 합니다.',
  },
  {
    icon: Sparkles,
    title: '가벼운 웹 경험',
    text: 'Vite 기반의 빠른 로딩과 반응형 레이아웃으로 모바일에서도 자연스럽게 보입니다.',
  },
];

const steps = ['캠페인 이해하기', '참여 방식 선택하기', '문의 또는 신청 남기기'];

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="홈으로 이동">
          <span className="brand-mark">H</span>
          <span>Holt Micro Page</span>
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#join">참여</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Vite + React micro website</p>
          <h1>작은 페이지 안에, 분명한 마음을 담습니다.</h1>
          <p className="hero-text">
            홀트 마이크로페이지의 첫 버전입니다. 캠페인의 목적, 참여 방법, 문의 동선을
            한 화면에서 자연스럽게 이어지도록 설계했습니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#join">
              참여 방법 보기
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button" href="#about">
              사이트 소개
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="캠페인 요약">
          <div className="panel-card main-card">
            <p>오늘의 목표</p>
            <strong>방문자가 30초 안에 이해하는 캠페인 페이지</strong>
          </div>
          <div className="panel-grid">
            <div className="panel-card">
              <span>01</span>
              <strong>명확한 메시지</strong>
            </div>
            <div className="panel-card">
              <span>02</span>
              <strong>쉬운 참여</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>필요한 정보만 또렷하게 보여주는 구조</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article className="highlight-card" key={item.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split-section" id="join">
        <div>
          <p className="eyebrow">Join</p>
          <h2>참여 흐름은 짧고 선명하게</h2>
          <p className="section-copy">
            실제 캠페인 문구와 신청 링크가 정해지면 이 영역을 후원, 신청, 뉴스레터,
            상담 예약 등 원하는 행동으로 바꿀 수 있습니다.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>다음 단계에서 실제 문구와 링크를 넣으면 완성됩니다.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:hello@example.com" aria-label="이메일 보내기">
            <Mail size={18} aria-hidden="true" />
            이메일
          </a>
          <a href="#home" aria-label="상단으로 이동">
            <MessageCircle size={18} aria-hidden="true" />
            상담 문의
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
