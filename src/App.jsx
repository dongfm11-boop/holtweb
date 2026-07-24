import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import holtLogo from '../이미지/홀트로고.png';
import rehabImage from '../이미지/소아재활.png';
import hospitalImage from '../이미지/지율병원.png';
import foodImage from '../이미지/지율이유식.png';
import jiyulWide from '../이미지/지율정면와이드.png';

const impactCards = [
  {
    id: 'nutrition',
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
    id: 'rehab',
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
    id: 'medical',
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
  const [selectedCards, setSelectedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlanSaved, setIsPlanSaved] = useState(false);
  const hasSelection = selectedCards.length > 0;

  const selectedPlanText = selectedCards
    .map((cardId) => {
      const card = impactCards.find((item) => item.id === cardId);
      return card ? `${card.name} · ${card.amount.replace('정기 ', '')}` : '';
    })
    .filter(Boolean)
    .join(' / ');

  const toggleCard = (cardId) => {
    setSelectedCards((current) =>
      current.includes(cardId) ? current.filter((id) => id !== cardId) : [...current, cardId],
    );
  };

  const openPlanModal = () => {
    if (hasSelection) {
      setIsPlanSaved(false);
      setIsModalOpen(true);
    }
  };

  const closePlanModal = () => {
    setIsModalOpen(false);
    setIsPlanSaved(false);
  };

  const reviewOtherEffects = () => {
    closePlanModal();
    document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="landing-page">
      <section className="hero" id="top" aria-label="지율이 후원 캠페인">
        <img className="hero-bg" src={jiyulWide} alt="" />

        <header className="site-header">
          <a href="https://love.holt.or.kr/" aria-label="홀트아동복지회 홈페이지로 이동">
            <img src={holtLogo} alt="홀트아동복지회" />
          </a>
          <div className="story-aside">
            <a className="story-link" href="https://support.holt.or.kr/jiyul">
              지율이 사연 자세히보기
            </a>
            <p className="story-note">
              *본 사연은 위기에 처한 가족의 실제 상황이며, 아동보호를 위해 가명과 대역을 사용했습니다.
            </p>
          </div>
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
            &apos;레트 증후군&apos;을 겪고 있는 지율이.
            <br />
            혼자서 아무것도 할 수 없는 지율이는
            <br />
            부모님의 밤낮없는 돌봄이 필요했습니다.
            <br />
            지율이네 가족의 하루는 생존을 위한 치열한 싸움입니다.
            <br />
            <br />
            그럼에도 부모님은 오늘도 기도합니다.
            <br />
            아이만 웃을 수 있다면
            <br />
            빚도, 지금의 이 고통도 다 괜찮다고.
            <br />
            <br />
            <strong>
              작은 도움이 모여 만드는 기적이
              <br />
              <span className="hero-highlight">지율이와 또 다른 아이들의 내일을 밝힙니다.</span>
            </strong>
          </p>
        </div>

        <a className="scroll-cue" href="#impact" aria-label="후원 변화 보기 영역으로 이동">
          <span className="chevron-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="scroll-sparkles" aria-hidden="true">
            <span />
            <span />
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
          {impactCards.map((card) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <article className="impact-card" key={card.id}>
                <button
                  type="button"
                  className={`impact-card-button${isSelected ? ' selected' : ''}`}
                  onClick={() => toggleCard(card.id)}
                  aria-pressed={isSelected}
                >
                  <div className="impact-card-image">
                    <img src={card.image} alt={card.imageAlt} />
                  </div>
                  <div className="impact-card-body">
                    <h2>{card.name}</h2>
                    <p>{card.effect}</p>
                    <strong>{card.amount}</strong>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className={`plan-button${hasSelection ? ' active' : ''}`}
          onClick={openPlanModal}
          disabled={!hasSelection}
        >
          <ShoppingCart className="plan-button-icon" size={22} strokeWidth={2.2} aria-hidden="true" />
          이 후원 계획 담기
        </button>
      </section>

      {isModalOpen ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={closePlanModal}>
          <section
            className={`plan-modal${isPlanSaved ? ' saved' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="plan-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={closePlanModal} aria-label="팝업 닫기">
              ×
            </button>

            {isPlanSaved ? (
              <div className="save-complete">
                <p className="modal-eyebrow">저장 완료</p>
                <h2 id="plan-modal-title">후원 계획이 저장되었습니다</h2>
                <p>
                  선택하신 ‘{selectedPlanText}’ 계획을 이메일로 보내드렸습니다.
                </p>
                <div className="complete-actions">
                  <a href="https://love.holt.or.kr/" className="primary-modal-action">
                    지금 후원 시작하기
                  </a>
                  <button type="button" className="secondary-modal-action" onClick={reviewOtherEffects}>
                    다른 후원 효과 살펴보기
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img className="modal-logo" src={holtLogo} alt="홀트아동복지회" />
                <h2 id="plan-modal-title">이메일로 후원 계획 저장하기</h2>
                <p>선택하신 후원 내용과 아이들의 이야기를 이메일로 보내드립니다.</p>
                <form className="plan-form" onSubmit={(event) => {
                  event.preventDefault();
                  setIsPlanSaved(true);
                }}>
                  <label htmlFor="support-email">이메일 주소</label>
                  <input id="support-email" type="email" placeholder="name@example.com" required />
                  <label className="consent-row">
                    <input type="checkbox" required />
                    <span>개인정보 수집 및 이용 동의</span>
                  </label>
                  <label className="consent-row">
                    <input type="checkbox" />
                    <span>광고성 정보 수신 동의</span>
                  </label>
                  <button type="submit">이메일로 저장하기</button>
                </form>
              </>
            )}
          </section>
        </div>
      ) : null}
    </main>
  );
}

export default App;
