import { useMemo, useState } from 'react';
import {
  ArrowDown,
  Baby,
  HeartHandshake,
  Home,
  Pill,
  ShieldCheck,
  Soup,
  Stethoscope,
} from 'lucide-react';
import jiyulFront from '../이미지/지율정면.png';
import jiyulBack from '../이미지/지율후면.png';
import headlineImage from '../이미지/지율폰트_흰글자.png';
import holtLogo from '../이미지/홀트로고.png';

const storyBlocks = [
  {
    title: '시간이 멈춰버린 듯, 지율이의 성장은 멈춰버렸습니다.',
    lines: [
      '생후 6개월, 건강검진에서 또래보다 발달이 늦다는 이야기를 들었습니다.',
      '부모님은 사랑으로 보살피면 곧 따라올 거라 생각했습니다.',
      "그러나 지율이는 희귀질환인 '레트 증후군' 진단을 받았습니다.",
    ],
  },
  {
    quote: '밤낮없이 이어지는 돌봄, 오늘도 버텨내야 합니다.',
    lines: [
      '혼자서 아무것도 할 수 없는 지율이에게는 한 모금의 물조차 쉽게 허락되지 않습니다.',
      '밤낮없이 이어지는 돌봄 속에서 부모님은 일터로 돌아가는 대신 지율이 곁을 지키기로 결정하였습니다.',
      '지율이네 가족의 하루는 생존을 위한 치열한 싸움입니다.',
    ],
  },
  {
    quote: '빚보다 더 무서운 건 지율이가 웃음을 잃는 것입니다.',
    lines: [
      '생활은 이미 한계에 다다랐습니다.',
      '모아둔 돈을 모두 지율이의 치료비로 쓰면서 결국 대출과 빚에 의지해야 했습니다.',
      '그럼에도 부모님은 아이만 웃을 수 있다면 지금의 고통도 버틸 수 있다고 기도합니다.',
    ],
  },
];

const impactOptions = [
  {
    amount: 20000,
    label: '정기 월 2만원',
    name: '매일의 영양 보충',
    effect: '삼킴이 어려운 아이에게 필요한 이유식, 영양식, 물품 지원에 보탬이 됩니다.',
    icon: Soup,
    details: ['맞춤 영양식', '돌봄 소모품', '가정 생계비 일부'],
  },
  {
    amount: 50000,
    label: '정기 월 5만원',
    name: '재활의 한 걸음',
    effect: '지율이처럼 꾸준한 치료가 필요한 아이들의 재활치료와 이동 지원에 힘이 됩니다.',
    icon: Stethoscope,
    details: ['재활치료비', '병원 이동비', '보호자 돌봄 부담 완화'],
  },
  {
    amount: 100000,
    label: '정기 월 10만원',
    name: '가족을 지키는 안전망',
    effect: '치료비와 생계비가 함께 필요한 가정에 더 안정적인 긴급 지원을 전할 수 있습니다.',
    icon: ShieldCheck,
    details: ['의료비 지원', '긴급 생계비', '장기 돌봄 기반'],
  },
];

const quickStats = [
  { icon: Baby, label: '희귀질환 아동', value: '지율이' },
  { icon: Pill, label: '필요한 지원', value: '치료·재활' },
  { icon: Home, label: '함께 지킬 일상', value: '가족의 하루' },
];

function formatWon(amount) {
  return new Intl.NumberFormat('ko-KR').format(amount);
}

function App() {
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const selectedImpact = useMemo(
    () => impactOptions.find((option) => option.amount === selectedAmount),
    [selectedAmount],
  );
  const SelectedIcon = selectedImpact.icon;

  return (
    <main className="page">
      <header className="site-header" aria-label="홀트 후원 페이지">
        <a className="logo-link" href="#top" aria-label="홀트아동복지회">
          <img src={holtLogo} alt="" />
        </a>
        <nav className="header-nav" aria-label="페이지 이동">
          <a href="#story">사연</a>
          <a href="#impact">후원효과</a>
        </nav>
      </header>

      <section className="hero-preview" id="top">
        <div className="preview-frame" aria-label="지율이 후원 상세페이지 축소판">
          <div className="preview-top">
            <img src={holtLogo} alt="홀트아동복지회" />
            <span>희귀질환 아동 의료지원</span>
          </div>
          <div className="preview-visual">
            <img className="jiyul-photo" src={jiyulFront} alt="병실 침대에 앉아 웃고 있는 지율이" />
            <div className="photo-shade" />
            <img
              className="headline-image"
              src={headlineImage}
              alt="치료비가 없는 희귀병, 지율이의 하루가 멈추고 있습니다."
            />
          </div>
          <div className="preview-story">
            <strong>지율이의 멈춰버린 하루를 다시 움직여주세요.</strong>
            <p>
              레트 증후군 진단 후 지율이의 하루는 치료와 돌봄으로 가득합니다. 부모님은 곁을 지키기
              위해 일터를 떠났고, 가족의 생활은 한계 앞에 서 있습니다.
            </p>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Holt Children&apos;s Services</p>
          <h1>지율이의 하루가 다시 이어질 수 있도록</h1>
          <p>
            작은 후원은 치료비와 돌봄비에 지친 한 가정의 숨을 틔우고, 지율이처럼 도움이 필요한 또
            다른 아이들의 내일을 밝힙니다.
          </p>
          <a className="scroll-link" href="#impact">
            내 후원으로 만들 수 있는 변화 보기
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-intro">
          <span>지율이 내용</span>
          <h2>밤낮없이 이어지는 돌봄 속에서도, 가족은 오늘을 버티고 있습니다.</h2>
        </div>

        <div className="story-grid">
          {storyBlocks.map((block) => (
            <article className="story-card" key={block.title || block.quote}>
              {block.quote ? <h3>&ldquo;{block.quote}&rdquo;</h3> : <h3>{block.title}</h3>}
              {block.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="promise-section">
        <div className="promise-photo">
          <img src={jiyulBack} alt="창가를 바라보며 침대에 앉아 있는 지율이의 뒷모습" />
        </div>
        <div className="promise-copy">
          <p>지율이, 그리고 또 다른 아이들의 내일을 위해</p>
          <h2>멈춰버린 일상을 되찾아주세요.</h2>
          <p>
            지율이의 재활은 여전히 험난하지만, 여러분의 도움은 아이의 성장에 기적을 만듭니다. 작은
            도움이 모여 만드는 기적이 지율이와 또 다른 아이들의 내일을 밝힙니다.
          </p>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-heading">
          <HeartHandshake size={28} aria-hidden="true" />
          <div>
            <p className="eyebrow">Monthly Giving</p>
            <h2>내 후원으로 만들 수 있는 변화 보기</h2>
          </div>
        </div>

        <div className="amount-tabs" role="tablist" aria-label="정기 후원 금액 선택">
          {impactOptions.map((option) => (
            <button
              type="button"
              key={option.amount}
              className={option.amount === selectedAmount ? 'active' : ''}
              onClick={() => setSelectedAmount(option.amount)}
              role="tab"
              aria-selected={option.amount === selectedAmount}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="impact-card" aria-live="polite">
          <div className="impact-main">
            <div className="impact-icon">
              <SelectedIcon size={34} aria-hidden="true" />
            </div>
            <div>
              <span>변화의 이름</span>
              <h3>{selectedImpact.name}</h3>
              <p>{selectedImpact.effect}</p>
            </div>
          </div>
          <div className="impact-price">
            <span>정기 월 후원금</span>
            <strong>{formatWon(selectedImpact.amount)}원</strong>
          </div>
          <ul className="impact-details">
            {selectedImpact.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="stat-strip">
          {quickStats.map((item) => {
            const Icon = item.icon;
            return (
              <div className="stat-item" key={item.label}>
                <Icon size={22} aria-hidden="true" />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
