import holtLogo from '../이미지/홀트로고.png';
import rehabImage from '../이미지/소아재활.png';
import hospitalImage from '../이미지/지율병원.png';
import foodImage from '../이미지/지율이유식.png';
import jiyulWide from '../이미지/지율정면와이드.png';

const impactCards = [
  {
    amount: '정기 월 2만원',
    name: '특수 영양식과 기저귀',
    effect: (
      <>
        삼킴과 식사가 어려운 아이에게 필요한
        <br />
        특수 영양식과 위생용품 지원에 함께합니다.
      </>
    ),
    image: foodImage,
    imageAlt: '아이를 위한 이유식과 영양 지원 이미지',
  },
  {
    amount: '정기 월 5만원',
    name: '재활치료 1회 지원',
    effect: (
      <>
        운동·감각 발달을 돕는
        <br />
        재활치료 비용 지원에 함께합니다.
      </>
    ),
    image: rehabImage,
    imageAlt: '소아 재활치료 지원 이미지',
  },
  {
    amount: '정기 월 10만원',
    name: '병원 이동과 의료비 지원',
    effect: (
      <>
        정기 진료와 치료를 이어갈 수 있도록
        <br />
        교통비와 의료비 지원에 함께합니다.
      </>
    ),
    image: hospitalImage,
    imageAlt: '병원 진료와 의료비 지원 이미지',
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
          <a className="story-link" href="https://support.holt.or.kr/jiyul">
            지율이 사연 자세히보기
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

        <p className="hero-impact-kicker">내 후원으로 만들 수 있는 변화 보기</p>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-kicker-placeholder" aria-hidden="true" />

        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className="impact-card" key={card.amount}>
              <div className="impact-card-image">
                <img src={card.image} alt={card.imageAlt} />
              </div>
              <div className="impact-card-body">
                <h2>{card.name}</h2>
                <p>{card.effect}</p>
                <strong>{card.amount}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
