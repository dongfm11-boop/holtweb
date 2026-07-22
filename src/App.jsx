import holtLogo from '../이미지/홀트로고.png';
import jiyulWide from '../이미지/지율정면와이드.png';

const impactCards = [
  {
    amount: '정기 월 2만원',
    name: '매일의 영양 보충',
    effect: '삼킴이 어려운 아이에게 필요한 이유식과 영양식을 전합니다.',
  },
  {
    amount: '정기 월 5만원',
    name: '재활의 한 걸음',
    effect: '꾸준한 치료가 필요한 아이들의 재활치료와 병원 이동을 돕습니다.',
  },
  {
    amount: '정기 월 10만원',
    name: '가족을 지키는 안전망',
    effect: '치료비와 생계비가 함께 필요한 가정에 긴급 지원을 전합니다.',
  },
];

function App() {
  return (
    <main className="landing-page">
      <section className="hero" id="top" aria-label="지율이 후원 캠페인">
        <img className="hero-bg" src={jiyulWide} alt="" />

        <header className="site-header">
          <a href="https://love.holt.or.kr/" aria-label="홀트아동복지회 홈페이지로 이동">
            <img src={holtLogo} alt="홀트아동복지회" />
          </a>
        </header>

        <div className="hero-copy">
          <h1>
            멈춰버린 일상,
            <br />
            그리고 또 다른 아이들의
            <br />
            내일을 위해
          </h1>
          <p>
            희귀질환으로 인한 가족의 치열한 싸움.
            <br />
            지율이의 재활은 여전히 험난하지만,
            <br />
            여러분의 도움은 아이의 성장에 기적을 만듭니다.
            <br />
            여러분의 사랑으로
            <br />
            <strong>멈춰버린 지율이의 일상을 되찾아주세요.</strong>
          </p>
        </div>

        <a className="scroll-cue" href="#impact" aria-label="후원 변화 보기 영역으로 이동">
          <span className="chevron-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="scroll-text">scroll down</span>
        </a>
      </section>

      <section className="impact-section" id="impact">
        <p className="impact-kicker">내 후원으로 만들 수 있는 변화 보기</p>

        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className="impact-card" key={card.amount}>
              <div>
                <span>변화의 이름</span>
                <h2>{card.name}</h2>
              </div>
              <p>{card.effect}</p>
              <strong>{card.amount}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
