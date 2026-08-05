import Image from "next/image";

const phoneDisplay = "+7 (918) 267-56-57";
const phoneHref = "tel:+79182675657";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
  ? `/${repositoryName}`
  : "";
const asset = (path: string) => `${basePath}${path}`;

const workPhotos = [
  { src: "/works/work-2.jpg", alt: "Йорк после груминга в студии Чуча", label: "Груминг собак" },
  { src: "/works/work-4.jpg", alt: "Кот после экспресс-линьки в студии Чуча", label: "Экспресс-линька" },
  { src: "/works/work-5.jpg", alt: "Ши-тцу после стрижки в студии Чуча", label: "Комплексный уход" },
  { src: "/works/work-6.jpg", alt: "Кот после груминга в студии Чуча", label: "Груминг кошек" },
  { src: "/works/work-3.jpg", alt: "Зал груминга студии Чуча", label: "Наша студия" },
  { src: "/works/work-1.jpg", alt: "Фасад студии груминга Чуча в Краснодаре", label: "Чуча · Краснодар" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Чуча — на главную">
          <Image
            className="brand-logo"
            src={asset("/chucha-logo.jfif")}
            alt="Логотип студии Чуча"
            width={72}
            height={60}
            priority
          />
          <span className="brand-caption">груминг · зоо-отель</span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#grooming">Груминг</a>
          <a href="#hotel">Зоо-отель</a>
          <a href="#care">О нас</a>
          <a className="nav-cta" href={phoneHref}>Записаться</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Открыть меню"><span></span><span></span></summary>
          <nav aria-label="Мобильная навигация">
            <a href="#grooming">Груминг</a>
            <a href="#hotel">Зоо-отель</a>
            <a href="#care">О нас</a>
            <a href="#contact">Контакты</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Grooming studio · Pet hotel · Краснодар</p>
          <h1 id="hero-title">Искусство<br />заботы</h1>
          <p className="hero-lead">
            Персональный уход, спокойная атмосфера и уютное размещение для тех,
            кого вы любите.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={phoneHref}>Записать питомца</a>
            <a className="text-link" href="#services">Посмотреть услуги</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Фирменная зона студии Чуча">
          <div className="hero-arch">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <Image
              className="hero-logo"
              src={asset("/chucha-logo.jfif")}
              alt="Чуча"
              width={300}
              height={250}
              priority
            />
          </div>
          <span className="care-badge">бережно · красиво · спокойно</span>
        </div>
      </section>

      <div className="service-line" aria-label="Ключевые направления">
        <span>01 — Груминг и SPA</span>
        <span>02 — Зоо-отель</span>
        <span>Краснодар · Благоева, 10/3</span>
      </div>

      <section className="intro" id="care">
        <p className="section-index">Подход Чучи</p>
        <div className="intro-copy">
          <h2>Красиво снаружи.<br />Спокойно внутри.</h2>
          <p>
            Мы знакомимся с питомцем, учитываем его характер и привычки и не
            торопим процедуры. Всё, чтобы визит прошёл комфортно и для хвостика,
            и для хозяина.
          </p>
        </div>
        <div className="round-stamp" aria-hidden="true">
          <span>ЧУЧА · PET CARE · ЧУЧА · PET CARE ·</span>
          <b>♡</b>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Всё необходимое в одном месте</p>
          <h2 id="services-title">Забота на каждый день</h2>
        </div>
        <div className="service-grid">
          <article className="service-card service-card-main" id="grooming">
            <span className="card-number">01</span>
            <div>
              <p className="eyebrow">Grooming</p>
              <h3>Груминг и SPA</h3>
              <p>Комплексный уход за шерстью, кожей, когтями и ушками с учётом породы и состояния питомца.</p>
              <a href={phoneHref}>Уточнить стоимость ↗</a>
            </div>
          </article>
          <article className="service-card service-card-light" id="hotel">
            <span className="card-number">02</span>
            <div>
              <p className="eyebrow">Pet hotel</p>
              <h3>Зоо-отель</h3>
              <p>Комфортное размещение и внимательный присмотр, пока вы заняты или находитесь в поездке.</p>
              <a href={phoneHref}>Узнать о свободных местах ↗</a>
            </div>
          </article>
          <article className="service-card service-card-gold">
            <span className="card-number">03</span>
            <div>
              <p className="eyebrow">First visit</p>
              <h3>Первое знакомство</h3>
              <p>Расскажите о питомце — мы подберём подходящий формат ухода и ответим на вопросы.</p>
              <a href={phoneHref}>Позвонить в студию ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <div className="works-heading">
          <div>
            <p className="eyebrow">Реальные гости студии</p>
            <h2 id="works-title">Наши работы</h2>
          </div>
          <p>Каждый питомец — со своим характером. Подбираем уход бережно и показываем результат без лишней обработки.</p>
        </div>
        <div className="works-grid">
          {workPhotos.map((photo, index) => (
            <figure className={`work-card work-card-${index + 1}`} key={photo.src}>
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                width={900}
                height={1100}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="works-source">Фотографии с официальной страницы студии «Чуча» на Яндекс Картах</p>
      </section>

      <section className="hotel-story" aria-labelledby="hotel-title">
        <div className="hotel-copy">
          <p className="eyebrow">Зоо-отель с домашней заботой</p>
          <h2 id="hotel-title">Пока вы в отъезде, питомец — как дома</h2>
          <p>
            Перед заселением уточним режим, питание и особенности характера.
            Вы сможете спокойно заниматься своими делами, зная, что любимец
            под присмотром.
          </p>
          <a className="gold-button" href={phoneHref}>Обсудить размещение</a>
        </div>
        <div className="hotel-features">
          <div><b>01</b><span>Внимательный присмотр</span></div>
          <div><b>02</b><span>Знакомая еда и привычный режим</span></div>
          <div><b>03</b><span>Связь с хозяином</span></div>
          <div><b>04</b><span>Груминг перед возвращением</span></div>
        </div>
      </section>

      <section className="steps-section" aria-labelledby="steps-title">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Простой первый шаг</p>
          <h2 id="steps-title">Как записаться</h2>
        </div>
        <ol className="steps-list">
          <li><span>01</span><div><h3>Позвоните</h3><p>Расскажите, какая услуга нужна и для какого питомца.</p></div></li>
          <li><span>02</span><div><h3>Выберите время</h3><p>Согласуем удобный день и уточним важные детали.</p></div></li>
          <li><span>03</span><div><h3>Приходите знакомиться</h3><p>Встретим, всё покажем и бережно позаботимся о любимце.</p></div></li>
        </ol>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">Перед первым визитом</p>
          <h2 id="faq-title">Ответы на вопросы</h2>
        </div>
        <div className="faq-list">
          <details><summary>Как подготовиться к грумингу?<span>+</span></summary><p>Сообщите мастеру о характере питомца, состоянии здоровья и предыдущем опыте процедур. Остальные рекомендации дадим при записи.</p></details>
          <details><summary>Что взять с собой в зоо-отель?<span>+</span></summary><p>Обычно понадобятся привычный корм, необходимые лекарства и любимая небольшая вещь питомца. Точный список уточните у администратора.</p></details>
          <details><summary>Можно ли заранее познакомиться со студией?<span>+</span></summary><p>Да. Позвоните нам — подберём удобное время для знакомства и ответим на вопросы.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-top">
          <p className="eyebrow">Чуча ждёт в гости</p>
          <h2>Запишем вашего<br />любимца?</h2>
          <a className="contact-phone" href={phoneHref}>{phoneDisplay}</a>
        </div>
        <div className="contact-bottom">
          <div><span>Адрес</span><p>Краснодар, ул. Дмитрия Благоева, 10/3</p></div>
          <div><span>Связь</span><p><a href={phoneHref}>Позвонить администратору</a></p></div>
          <a className="circle-call" href={phoneHref} aria-label="Позвонить в Чучу">↗</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <Image className="brand-logo" src={asset("/chucha-logo.jfif")} alt="Чуча" width={72} height={60} />
          <span className="brand-caption">груминг · зоо-отель</span>
        </a>
        <p>© {new Date().getFullYear()} Чуча. Краснодар.</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
