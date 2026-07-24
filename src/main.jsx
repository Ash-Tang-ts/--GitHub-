import { useEffect, useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseBlindfedo from "./assets/case-blindfedo.png";
import caseLampick from "./assets/case-lampick.png";
import caseFudoni from "./assets/case-fudoni.png";
import caseVinatzen from "./assets/case-vinatzen.jpg";
import blindfedoCover from "./assets/amazon-blindfedo-cover.png";
import lampickCover from "./assets/amazon-lampick-cover.png";
import fudoniCover from "./assets/amazon-fudoni-cover.png";
import vinatzenCover from "./assets/jd-vinatzen-cover.png";
import buninBrand from "./assets/bunin-brand-guidelines.jpg";
import buninWebsite from "./assets/bunin-website-cover.jpg";
import buninWebsiteCover from "./assets/bunin-website-cover-v2.png";
import heroBackground from "./assets/hero-background-v2.jpg";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const burnVisPages = Object.entries(
  import.meta.glob("./assets/burn-vis/*.jpg", {
    eager: true,
    import: "default",
  }),
)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([, image]) => image);

const burnWebsitePages = Object.entries(
  import.meta.glob("./assets/burn-website/*.jpg", {
    eager: true,
    import: "default",
  }),
)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([, image]) => image);

const renderCollectionPages = Object.entries(
  import.meta.glob("./assets/render-collection/*.{jpg,png}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([left], [right]) => {
    const leftNumber = Number(left.match(/\/(\d+)\./)?.[1]);
    const rightNumber = Number(right.match(/\/(\d+)\./)?.[1]);
    return leftNumber - rightNumber;
  })
  .map(([, image]) => image);

const projects = [
  {
    slug: "blindfedo",
    no: "01",
    brand: "BLINDFEDO",
    category: "Amazon 视觉增长",
    group: "amazon",
    year: "2025",
    title: "用视觉驱动增长的数码配件体系",
    image: caseBlindfedo,
    coverImage: blindfedoCover,
    className: "blue",
    meta: [
      ["服务内容", "品牌视觉 / Amazon Listing / A+"],
      ["我的角色", "视觉策略、创意与页面设计"],
      ["项目周期", "2025"],
    ],
    brief:
      "围绕便携扩展坞的专业属性与真实使用场景，建立兼顾技术可信度与转化效率的 Amazon 视觉表达。",
    challenge:
      "产品功能多、参数复杂，消费者需要在短时间内理解兼容性、性能与使用价值。",
    approach: [
      "梳理核心用户与高频办公场景，明确“专业、轻量、可靠”的沟通主线。",
      "以模块化信息层级承接性能参数、卖点证明与生活化场景，降低理解成本。",
      "统一 Listing、A+ 与店铺端的视觉语言，支持后续 SKU 扩展。",
    ],
    outcome: [
      "建立可复用的数码品类视觉模板",
      "覆盖 Listing、A+ 与品牌店铺页面",
      "以数据复盘支持持续视觉迭代",
    ],
  },
  {
    slug: "lampick",
    no: "02",
    brand: "LAMPICK",
    category: "品牌体系 / 智能宠物",
    group: "amazon",
    year: "2025",
    title: "让智能喂养更有温度的品牌体验",
    image: caseLampick,
    coverImage: lampickCover,
    className: "sand",
    meta: [
      ["服务内容", "品牌视觉 / Amazon Listing / A+"],
      ["我的角色", "视觉策略、页面系统设计"],
      ["项目周期", "2025"],
    ],
    brief:
      "为带摄像头的智能喂食器建立居家感与科技感平衡的视觉体系，让复杂产品能力变得直观、可信、易理解。",
    challenge:
      "面对宠物主人，既要说明智能功能和硬件能力，也要传递照顾宠物的情感价值。",
    approach: [
      "以“陪伴感”串联远程喂养、实时互动和健康管理等功能。",
      "将功能信息拆分为清晰的情境化模块，减少科技产品的距离感。",
      "以暖色居家场景、宠物影像与产品特写建立统一品牌记忆。",
    ],
    outcome: [
      "完成跨页面的品牌视觉统一",
      "形成可延展的智能宠物品类设计语言",
      "增强功能卖点的可读性与信任感",
    ],
  },
  {
    slug: "fudoni",
    no: "03",
    brand: "FUDONI",
    category: "Amazon 视觉增长",
    group: "amazon",
    year: "2025",
    title: "把家庭影院体验带进产品故事",
    image: caseFudoni,
    coverImage: fudoniCover,
    className: "amber",
    meta: [
      ["服务内容", "Amazon Listing / A+ / 广告素材"],
      ["我的角色", "创意方向、信息架构与视觉设计"],
      ["项目周期", "2025"],
    ],
    brief:
      "为智能投影仪提炼“沉浸式家庭影院”的核心叙事，让性能卖点与真实娱乐体验在同一套页面中成立。",
    challenge:
      "投影仪参数密集、竞品同质化明显，需要在第一屏就建立画质与沉浸体验的差异。",
    approach: [
      "以电影感主视觉建立高端体验预期。",
      "将画质、连接、音效与投射场景转译成清晰易扫读的视觉模块。",
      "通过使用场景和设备兼容性，补全消费者从兴趣到决策的信息路径。",
    ],
    outcome: [
      "构建完整的家庭影院视觉叙事",
      "覆盖移动端与桌面端商品详情体验",
      "沉淀投影品类的页面设计方法",
    ],
  },
  {
    slug: "bunin-visual-system",
    no: "04",
    brand: "BURN",
    category: "品牌视觉规范",
    group: "brand",
    year: "2025",
    title: "建立可延展的 BURN 品牌视觉系统",
    image: buninBrand,
    gallery: burnVisPages,
    className: "brand",
    meta: [
      ["服务内容", "品牌视觉规范 / 应用体系"],
      ["我的角色", "视觉系统设计、规范梳理"],
      ["项目周期", "2025"],
    ],
    brief:
      "以统一的视觉识别系统连接品牌的内部协作与外部表达，沉淀可长期执行的品牌资产。",
    challenge: "需要将抽象的品牌气质转译为跨团队可理解、可复用的视觉规则。",
    approach: [
      "梳理品牌标识、色彩、字体与辅助图形的核心规则。",
      "建立版式、场景应用与物料延展的统一标准。",
      "以清晰的规范结构降低日常沟通与应用成本。",
    ],
    outcome: [
      "形成完整品牌视觉规范文档",
      "支持线上线下应用的一致性",
      "建立可持续执行的品牌资产体系",
    ],
  },
  {
    slug: "bunin-website",
    no: "05",
    brand: "BURN",
    category: "独立站体验设计",
    group: "brand",
    year: "2025",
    title: "以运动场景串联品牌官网与内容体验",
    image: buninWebsite,
    coverImage: buninWebsiteCover,
    gallery: burnWebsitePages,
    className: "brand",
    meta: [
      ["服务内容", "独立站首页 / 页面系统 / 内容体验"],
      ["我的角色", "网页视觉设计、信息架构与内容编排"],
      ["项目周期", "2025"],
    ],
    brief:
      "围绕运动品牌的产品、课程与 App 服务，建立贯穿首页、内容页与下载转化入口的独立站视觉体验。",
    challenge:
      "需要将品牌主张、运动氛围与多类产品服务放入同一套清晰的页面路径，让用户快速理解品牌价值与下一步行动。",
    approach: [
      "以强场景化首屏建立运动品牌的第一印象，并保持产品与内容之间的视觉一致性。",
      "梳理首页、产品服务、课程、运动档案与 App 下载的层级，降低浏览和选择成本。",
      "通过深色基底、留白和高对比信息模块，兼顾品牌气质、内容阅读与转化入口。",
    ],
    outcome: [
      "完成独立站核心页面的视觉系统与内容模块设计",
      "建立产品、课程、App 与运动内容之间的统一体验",
      "沉淀可复用的品牌官网页面语言",
    ],
  },
  {
    slug: "vinatzen",
    no: "06",
    brand: "VINATZEN",
    category: "京东健康页面",
    group: "jd",
    year: "2026",
    title: "以科学感建立营养品的信任表达",
    image: caseVinatzen,
    coverImage: vinatzenCover,
    className: "gold",
    meta: [
      ["服务内容", "品牌视觉 / Amazon Listing"],
      ["我的角色", "品牌表达、内容与页面设计"],
      ["项目周期", "2026"],
    ],
    brief:
      "围绕 NMN 营养品的科学配方与高端感知，建立兼具克制、可信和精致感的品牌视觉。",
    challenge:
      "健康营养品需要兼顾合规信息、成分解释和品质感，避免视觉过度承诺。",
    approach: [
      "用统一的暖金色系和极简排版建立高级、可靠的第一印象。",
      "按用户疑问组织成分、功效机理、使用场景与品质证明。",
      "以人物状态和细节质感降低抽象成分信息的理解门槛。",
    ],
    outcome: [
      "形成成熟统一的营养品视觉体系",
      "平衡信息密度、合规表达与品牌气质",
      "支持后续系列化产品扩展",
    ],
  },
  {
    slug: "product-render-collection",
    no: "07",
    brand: "RENDER COLLECTION",
    category: "产品视觉渲染",
    group: "jd",
    year: "2026",
    title: "多品类产品视觉渲染合集",
    image: renderCollectionPages[0],
    coverImage: renderCollectionPages[0],
    gallery: renderCollectionPages,
    className: "brand",
    meta: [
      ["服务内容", "产品渲染 / 场景视觉 / 内容创意"],
      ["我的角色", "创意方向、视觉设计与渲染"],
      ["项目周期", "2026"],
    ],
    brief:
      "以不同产品品类为载体，探索材质、光影、场景与产品叙事之间的视觉关系，形成可用于品牌内容与商品表达的渲染视觉合集。",
    challenge:
      "在保持产品识别与结构清晰的前提下，为不同品类建立具有记忆点的氛围、质感与观看视角。",
    approach: [
      "从产品核心材质与使用语境出发，定义每组视觉的色彩、光线与空间氛围。",
      "通过局部特写、场景化构图与抽象装置，丰富产品内容的观看层次。",
      "将高质感渲染与信息表达结合，支持品牌内容、详情页与传播素材延展。",
    ],
    outcome: [
      "沉淀多品类产品的视觉渲染方向",
      "建立可延展的场景与材质表达方法",
      "支持品牌内容与商品视觉的创意探索",
    ],
  },
];

const workCategories = [
  {
    id: "amazon",
    no: "01",
    title: "Amazon 页面",
    description: "Listing / A+ / Brand Store",
  },
  {
    id: "brand",
    no: "02",
    title: "品牌相关",
    description: "Visual Identity / DTC Website",
  },
  {
    id: "jd",
    no: "03",
    title: "其他页面",
    description: "Product Detail / Content Design",
  },
];

const legacyStrengths = [
  [
    "品牌从 0 到 1",
    "从定位、Logo、包装到视觉规范，建立具有辨识度且可延展的品牌表达。",
  ],
  [
    "Amazon 视觉增长",
    "熟悉 Listing、A+、品牌旗舰店与品牌故事，用页面结构支持点击与转化。",
  ],
  [
    "数据驱动迭代",
    "结合点击率、转化率、搜索词和竞品信息，让设计成为可复盘的增长工具。",
  ],
  [
    "AI 设计工作流",
    "将 AI 工具融入调研、创意、文案与视觉生产，提升团队协作效率。",
  ],
];

const strengths = [
  [
    "Amazon Listing 增长",
    "覆盖 Listing 主图、A+、品牌旗舰店与品牌故事；结合 CTR、CVR 等数据，持续优化页面视觉与转化表现。",
  ],
  [
    "品牌 0-1 视觉体系",
    "从品牌定位、Logo、包装到品牌色、字体规范和视觉资产，建立统一且可延展的品牌识别。",
  ],
  [
    "数据驱动设计优化",
    "基于 BI 看板、点击率、转化率、搜索词和竞品数据分析，以 A/B Test 形成设计增长闭环。",
  ],
  [
    "AI 设计工作流",
    "将 AI 工具用于品牌调研、文案策划、视觉创意与标准化流程，提升内容生产效率。",
  ],
  [
    "海外社媒视觉",
    "熟悉 TikTok、Instagram、YouTube、Facebook 等平台的视觉特点与内容形式，输出一致的品牌传播素材。",
  ],
  [
    "团队管理与设计协同",
    "具备 3 年设计团队管理经验，负责任务拆解、排期、质量把控与新人培养，协同品牌、运营和供应链。",
  ],
];

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Header({ dark = false, scrolled = false, activeSection = "home" }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const highlightedSection = hoveredSection ?? activeSection;
  const navItems = [
    ["home", "首页"],
    ["work", "作品"],
    ["about", "经历"],
    ["contact", "联系"],
  ];
  return (
    <header
      className={`${dark ? "header header-dark" : "header"}${scrolled ? " header-scrolled" : ""}`}
    >
      <a
        className="header-mark"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        TS
      </a>
      <nav onMouseLeave={() => setHoveredSection(null)}>
        {navItems.map(([id, label]) => (
          <a
            className={highlightedSection === id ? "nav-active" : ""}
            href={`/#${id}`}
            onMouseEnter={() => setHoveredSection(id)}
            key={id}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="header-mail" href="/#contact" aria-label="前往联系区域">
        ✉
      </a>
    </header>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "contact"];
    const fn = () => {
      setScrolled(window.scrollY >= window.innerHeight - 88);
      const viewportMarker = window.innerHeight * 0.42;
      const current = sectionIds.reduce(
        (active, id) =>
          document.getElementById(id)?.getBoundingClientRect().top <=
          viewportMarker
            ? id
            : active,
        "home",
      );
      setActiveSection(current);
    };
    addEventListener("scroll", fn);
    addEventListener("resize", fn);
    fn();
    return () => {
      removeEventListener("scroll", fn);
      removeEventListener("resize", fn);
    };
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTimeline
        .set(".hero-opening-curtain", { autoAlpha: 1, scaleX: 1, transformOrigin: "right center" })
        .set(".hero-content .eyebrow, .hero-summary, .hero-actions, .hero-stats", {
          autoAlpha: 0,
          y: 28,
        })
        .set(".hero-title-text", { yPercent: 118, scaleY: 0.62, transformOrigin: "bottom center" })
        .to(".hero-opening-curtain", { scaleX: 0, duration: 1.35, ease: "power4.inOut" })
        .to(".hero-title-text", { yPercent: 0, scaleY: 1, duration: 1.25, stagger: 0.14 }, 0.36)
        .to(".hero-content .eyebrow", { autoAlpha: 1, y: 0, duration: 0.8 }, 0.76)
        .to(".hero-summary", { autoAlpha: 1, y: 0, duration: 0.85 }, 0.96)
        .to(".hero-actions, .hero-stats", { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12 }, 1.08);

      gsap.to(".home-hero", {
        backgroundPosition: "54% 50%",
        ease: "none",
        scrollTrigger: { trigger: ".home-hero", start: "top top", end: "bottom top", scrub: 1.1 },
      });

      gsap.utils.toArray(".section-head").forEach((heading) => {
        const title = heading.querySelector("h2");
        const index = heading.querySelector(".section-index");
        const copy = heading.querySelector(":scope > p");
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: heading, start: "top 78%", once: true },
          defaults: { ease: "power4.out" },
        });
        if (index) timeline.from(index, { x: -48, autoAlpha: 0, duration: 0.7 });
        if (title) timeline.from(title, { x: -120, autoAlpha: 0, scaleX: 0.82, duration: 1.25 }, "-=0.4");
        if (copy) timeline.from(copy, { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.78");
      });

      gsap.utils.toArray(".work-category").forEach((category) => {
        const cards = category.querySelectorAll(".project-card");
        const images = category.querySelectorAll(".project-image");
        gsap.set(images, { clipPath: "inset(0 100% 0 0)" });
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: category, start: "top 75%", once: true },
          defaults: { ease: "power4.out" },
        });
        timeline
          .from(category.querySelector(".work-category-head"), { y: 42, autoAlpha: 0, duration: 0.85 })
          .from(cards, { y: 72, autoAlpha: 0, duration: 1.05, stagger: 0.13 }, "-=0.35")
          .to(images, { clipPath: "inset(0 0% 0 0)", duration: 1.1, stagger: 0.13, ease: "power4.inOut" }, "<");
      });

      gsap.utils.toArray(".strength-grid, .experience").forEach((block) => {
        const items = block.querySelectorAll("article");
        gsap.from(items, {
          y: 64,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: block, start: "top 78%", once: true },
        });
      });

      gsap.from("footer .section-index, footer h2, .contact-links, .footer-row", {
        y: 52,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: { trigger: "footer", start: "top 78%", once: true },
      });
    });

    return () => context.revert();
  }, []);
  return (
    <>
      <div
        className="home-hero"
        id="home"
        style={{ "--hero-background": `url(${heroBackground})` }}
      >
        <div className="hero-opening-curtain" aria-hidden="true" />
        <Header scrolled={scrolled} activeSection={activeSection} />
        <div className="shell hero-layout">
          <div className="hero-content">
            <p className="eyebrow">BRAND / E-COMMERCE / AI DESIGNER</p>
            <h1>
              <span className="hero-title-line">
                <span className="hero-title-text">让设计成为</span>
              </span>
              <span className="hero-title-line">
                <em className="hero-title-text">
                  品牌增长<span className="hero-title-tail">的语言</span>
                </em>
              </span>
            </h1>
            <p className="hero-summary">
              7 年跨境电商品牌设计经验，专注北美市场品牌建设与 Amazon
              视觉增长。从视觉体系到转化页面，用设计推动可见的商业价值。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                查看精选作品 <b>↓</b>
              </a>
              <a className="button" href="#contact">
                联系我 <b>↗</b>
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>
                  7<span>+</span>
                </strong>
                <small>年品牌设计经验</small>
              </div>
              <div>
                <strong>
                  100<span>+</span>
                </strong>
                <small>SKU 视觉迭代</small>
              </div>
              <div>
                <strong>
                  3<span>+</span>
                </strong>
                <small>年团队管理经验</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="work-section" id="work">
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="section-index">01 / SELECTED WORK</p>
                <h2>精选案例</h2>
              </div>
              <p>
                从品牌底层表达，到商品详情页的
                <br />
                每一次视觉决策，都服务于生长。
              </p>
            </div>
            <div className="work-categories">
              {workCategories.map((category) => {
                const categoryProjects = projects.filter(
                  (project) => project.group === category.id,
                );
                return (
                  <section className="work-category" key={category.id}>
                    <header className="work-category-head">
                      <div>
                        <span>{category.no}</span>
                        <h3>{category.title}</h3>
                      </div>
                      <p>{category.description}</p>
                    </header>
                    <div
                      className={`project-grid ${categoryProjects.length === 1 ? "project-grid-single" : ""}`}
                    >
                      {categoryProjects.map((project) => (
                          <a
                            className={`project-card ${project.className}`}
                            href={`/work/${project.slug}`}
                            onClick={(e) => {
                            e.preventDefault();
                            navigate(`/work/${project.slug}`);
                          }}
                          key={project.slug}
                        >
                          <div className="project-image">
                            <img
                              src={project.coverImage ?? project.image}
                              alt={`${project.brand} 项目预览`}
                              draggable={false}
                              onContextMenu={(event) => event.preventDefault()}
                              onDragStart={(event) => event.preventDefault()}
                            />
                          </div>
                          <div className="project-meta">
                            <span>
                              {project.no} / {project.category}
                            </span>
                            <span>{project.year} ↗</span>
                          </div>
                          <h3>{project.brand}</h3>
                          <p>{project.title}</p>
                        </a>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="section-index">02 / 核心优势 · CORE EXPERTISE</p>
                <h2>
                  设计，不止交付
                  <br />
                  <em>更要驱动生长。</em>
                </h2>
              </div>
              <p className="about-lead">
                我在品牌、运营与设计之间工作。理解跨境业务的协作节奏，也坚持让每套视觉系统既有品牌辨识度，又能服务用户决策。
              </p>
            </div>
            <div className="strength-grid">
              {strengths.map(([title, text], i) => (
                <article
                  className={`strength-card strength-card-${i + 1}`}
                  key={title}
                >
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="experience">
              <p className="section-index">WORK EXPERIENCE</p>
              <div className="experience-grid">
                <article>
                  <p>2026.04 — 2026.08</p>
                  <h3>澳门「跨境说」深圳分公司</h3>
                  <strong>设计经理</strong>
                  <ul>
                    <li>负责北美品牌视觉建设与品牌前期体系搭建。</li>
                    <li>调研 50+ 海外品牌与 21 个北美保健品牌。</li>
                    <li>探索 AI 工作流，支持业务增长与设计提效。</li>
                  </ul>
                </article>
                <article>
                  <p>2022.04 — 2025.11</p>
                  <h3>深圳勇创商贸有限公司</h3>
                  <strong>设计主管</strong>
                  <ul>
                    <li>负责公司品牌视觉体系与 Amazon 视觉增长。</li>
                    <li>累计支持 100+ SKU 上新视觉迭代。</li>
                    <li>部分产品点击率提升 15%+，转化率提升 20%+。</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="shell">
          <p className="section-index">03 / LET'S TALK</p>
          <h2>
            下一次增长，
            <br />
            <em>从对话开始。</em>
          </h2>
          <div className="contact-links">
            <a href="tel:17694962316">
              176 9496 2316 <b>↗</b>
            </a>
            <a href="https://weixin.qq.com/" target="_blank" rel="noreferrer">
              微信：Sz000042 <b>↗</b>
            </a>
          </div>
          <div className="footer-row">
            <span>© 2026 TANG SHUBING</span>
            <span>SHENZHEN, CHINA</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function ProjectPage({ project }) {
  return (
    <div className={`case-page${project.slug === "bunin-visual-system" ? " case-page-burn-vis" : ""}`}>
      <Header dark />
      <main>
        <section className="case-hero">
          <div className="shell">
            <a
              className="back"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              ← 返回作品列表
            </a>
            <p className="case-number">
              {project.no} / {project.category.toUpperCase()}
            </p>
            <h1>
              {project.brand}
              <span>{project.title}</span>
            </h1>
            <p className="case-brief">{project.brief}</p>
            <div className="case-meta">
              {project.meta.map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`case-cover${project.gallery ? " case-cover-gallery" : ""}`}>
          {(project.gallery ?? [project.image]).map((image, index) => (
            <img
              src={image}
              alt={`${project.brand} 项目完整视觉展示 ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              onDragStart={(event) => event.preventDefault()}
              key={image}
            />
          ))}
        </section>
        <section className="case-story shell">
          <div>
            <p className="section-index">PROJECT OVERVIEW</p>
            <h2>
              从问题出发，
              <br />
              <em>让设计成为答案。</em>
            </h2>
          </div>
          <div className="case-story-copy">
            <article>
              <span>01</span>
              <h3>项目挑战</h3>
              <p>{project.challenge}</p>
            </article>
            <article>
              <span>02</span>
              <h3>设计策略</h3>
              <ol>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article>
              <span>03</span>
              <h3>项目价值</h3>
              <ul>
                {project.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        <section className="case-next">
          <div className="shell">
            <p>MORE WORK</p>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              返回首页 <b>↗</b>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const slug = location.pathname.match(/^\/work\/([^/]+)$/)?.[1];
  const project = projects.find((item) => item.slug === slug);
  return project ? <ProjectPage project={project} /> : <Home />;
}
createRoot(document.getElementById("root")).render(<App />);
