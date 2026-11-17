import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './home.module.css';

const START_PROJECT = 'https://thompsonsoftware.org/#contact';
const ESTIMATE = 'https://thompsonsoftware.org/estimate';
const STUDIO = 'https://thompsonsoftware.org';
const LINKEDIN = 'https://www.linkedin.com/in/tylerjamesthompson';
const GITHUB = 'https://github.com/tylerthompson';

const PROJECTS = [
  {
    name: 'LiveFromWisco',
    href: 'https://www.livefromwisco.com',
    status: 'live',
    runsOn: 'Web, iOS, Android',
    links: [
      {label: 'Website', href: 'https://www.livefromwisco.com'},
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/live-from-wisco/id6762004757',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.livefromwisco.app',
      },
    ],
  },
  {
    name: 'Luna',
    href: 'https://apps.apple.com/us/app/luna-private-cycle-tracker/id6769168539',
    status: 'live',
    runsOn: 'iOS, Android',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/luna-private-cycle-tracker/id6769168539',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=me.tylerthompson.apps.luna',
      },
    ],
  },
  {
    name: 'Julian Suite',
    href: `${STUDIO}/#projects`,
    status: 'progress',
    runsOn: 'iOS, Android, Web',
    links: [{label: 'Thompson Software', href: `${STUDIO}/#projects`}],
  },
  {
    name: 'IconForge',
    href: 'https://chromewebstore.google.com/detail/iconforge/gjmldlopocodgjkofpbkmeopmjfgngeg',
    status: 'live',
    runsOn: 'Chrome, Firefox, Safari, Edge',
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/iconforge/gjmldlopocodgjkofpbkmeopmjfgngeg',
      },
    ],
  },
  {
    name: 'Daycare Cost Calculator',
    href: 'https://chromewebstore.google.com/detail/daycare-cost-calculator/hhnbegodboonhnlflpdiemobmpofiole',
    status: 'live',
    runsOn: 'Chrome, Firefox, Safari, Edge',
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/daycare-cost-calculator/hhnbegodboonhnlflpdiemobmpofiole',
      },
    ],
  },
];

const SERVICES = [
  {
    name: 'Web apps and SaaS',
    detail:
      'Dashboards, platforms, and products with real backends, auth, and room to grow.',
    proof: 'Julian Suite · LiveFromWisco',
  },
  {
    name: 'iOS and Android apps',
    detail:
      'Native-feel mobile apps shipped to both stores, built once where it makes sense.',
    proof: 'Luna · LiveFromWisco',
  },
  {
    name: 'Browser extensions',
    detail:
      'Small, focused tools that respect browser conventions and user privacy.',
    proof: 'IconForge · Daycare Cost Calculator',
  },
  {
    name: 'Websites',
    detail: 'Fast marketing sites and portals that load quickly and read cleanly.',
    proof: 'thompsonsoftware.org',
  },
  {
    name: 'Ongoing support',
    detail:
      'Update plans and retainers for the work that keeps software healthy after launch: fixes, dependencies, new features.',
    proof: 'Monthly retainers',
  },
  {
    name: 'Consulting',
    detail:
      'Architecture reviews and technical strategy for teams that need senior judgment.',
    proof: '15+ years in enterprise engineering',
  },
];

const EXPERIENCE = [
  {
    org: 'Northwestern Mutual',
    role: 'Senior engineering, enterprise observability',
    detail:
      'Fortune 500 financial services company — led monitoring and observability deployments across HP BSM, New Relic, Dynatrace, Splunk, and Elastic, from initial setup to full coverage.',
  },
  {
    org: 'Thompson Software',
    role: 'Founder',
    detail:
      'Independent software studio in Evansville, Wisconsin. Custom web and mobile apps, SaaS products, browser extensions, and ongoing support.',
  },
  {
    org: 'SocialFlare',
    role: 'Founder, 6+ years',
    detail:
      'Founded and operated a social networking platform for more than six years, across architecture, infrastructure, product, and support.',
  },
  {
    org: 'Grubhub',
    role: 'QA Engineer',
    detail:
      'Quality assurance engineering for a national food-delivery marketplace.',
  },
  {
    org: 'Rakuten',
    role: 'Software Engineer',
    detail:
      'Product engineering on consumer web platforms within a Fortune Global 500 internet services group.',
  },
  {
    org: 'Ebates',
    role: 'Software Engineer',
    detail:
      'Engineering on the cash-back shopping platform through its acquisition by Rakuten.',
  },
  {
    org: 'FatWallet',
    role: 'Software Engineer',
    detail:
      'Joined as a junior engineer, promoted to level 1 after about six months, and stayed on through the company\u2019s acquisition by Ebates.',
  },
  {
    org: 'Open source',
    role: 'google-play-console-mcp · Veya',
    detail:
      'An MCP server that puts Play Console reporting inside AI tooling, and an open-source IPTV player built for clean UX and broad format support.',
  },
];

const SUITE_APPS = [
  {
    name: 'Julian Notes',
    href: `${STUDIO}/projects/julian-notes`,
    desc: 'Encrypted note-taking, built for meetings and everyday thinking.',
  },
  {
    name: 'Julian Meetings',
    href: `${STUDIO}/projects/julian-meetings`,
    desc: 'Encrypted, peer-to-peer video meetings.',
  },
  {
    name: 'Julian Chat',
    href: `${STUDIO}/#projects`,
    desc: 'Encrypted messaging for private conversations.',
  },
  {
    name: 'Julian Storage',
    href: `${STUDIO}/projects/julian-storage`,
    desc: 'Encrypted cloud storage.',
  },
  {
    name: 'Julian Auth',
    href: `${STUDIO}/projects/julian-auth`,
    desc: 'A standalone two-factor authentication service.',
  },
  {
    name: 'Julian Vault',
    href: `${STUDIO}/projects/julian-vault`,
    desc: 'A standalone password manager with strong client-side encryption.',
  },
];

const INVOKE_SNIPPET = [
  '  const parts = trimmed.split(".").filter(Boolean);',
  '  if (parts.length < 2) {',
  '    throw new Error(',
  '      "operation must be resource.path.to.method with at least two segments (e.g. edits.insert, purchases.subscriptionsv2.get)"',
  '    );',
  '  }',
  '',
  '  for (const p of parts) {',
  '    if (!SEGMENT_RE.test(p) || BLOCKED_SEGMENTS.has(p)) {',
  '      throw new Error(`Invalid path segment: ${p}`);',
  '    }',
  '  }',
  '',
  '  const root = parts[0];',
  '  if (!ROOT_RESOURCES.has(root)) {',
  '    throw new Error(',
  '      `Unknown API root "${root}". Allowed roots: ${[...ROOT_RESOURCES].sort().join(", ")}`',
  '    );',
  '  }',
].join('\n');

const INVOKE_SOURCE =
  'https://github.com/tylerthompson/google-play-console-mcp/blob/main/src/api/android-publisher-invoke.ts';

function Reveal({children, className, delay = 0}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            io.disconnect();
          }
        });
      },
      {threshold: 0.12},
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={clsx('tt-reveal', className)}
      style={delay ? {transitionDelay: `${delay}ms`} : undefined}>
      {children}
    </div>
  );
}

function ArrowIcon({dir = 'ext', className}) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {dir === 'ext' ? (
        <>
          <path d="M3.2 8.8l5.6-5.6" />
          <path d="M5.6 3.2h3.2" />
          <path d="M8.8 3.2v3.2" />
        </>
      ) : (
        <>
          <path d="M2.5 6h7" />
          <path d="M6.5 3l3 3-3 3" />
        </>
      )}
    </svg>
  );
}

function ExtLink({href, children, className}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}>
      {children}
      <ArrowIcon className={styles.linkArrow} />
    </a>
  );
}

function StatusTag({status}) {
  const live = status === 'live';
  return (
    <span className={styles.status} data-status={status}>
      <span className={styles.statusDot} aria-hidden="true" />
      {live ? 'Live' : 'In progress'}
    </span>
  );
}

function SectionShell({id, title, intro, children}) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>
        <Reveal className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Hero() {
  const titleWords = 'I ship software, and it’s still running.'.split(' ');
  return (
    <header className={styles.hero}>
      <div className={styles.heroField} aria-hidden="true">
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice">
          <g
            className={styles.heroFieldDrift}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
            <rect x="1010" y="-140" width="560" height="440" rx="48" />
            <circle cx="150" cy="600" r="210" />
            <rect x="1160" y="470" width="190" height="130" rx="26" />
          </g>
        </svg>
      </div>
      <div className={styles.container}>
        <Reveal>
          <h1 className={styles.heroTitle}>
            {titleWords.map((word, i) => (
              <React.Fragment key={i}>
                <span className={styles.heroWordMask}>
                  <span
                    className={styles.heroWord}
                    style={{'--i': i}}>
                    {word}
                  </span>
                </span>
                {i < titleWords.length - 1 ? ' ' : null}
              </React.Fragment>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.heroSub}>
            I&rsquo;m Tyler Thompson, a senior software engineer and the founder
            of Thompson Software. I design and build web and mobile products,
            from first prototype to apps with real users. The same person
            scopes the work, writes the code, and answers your email.
          </p>
        </Reveal>
        <Reveal delay={160} className={styles.heroActions}>
          <ExtLink href={START_PROJECT} className={clsx(styles.btn, styles.btnPrimary)}>
            Start a project
          </ExtLink>
          <a href="#work" className={clsx(styles.btn, styles.btnGhost)}>
            See the work
          </a>
        </Reveal>

        <Reveal delay={240} className={styles.indexWrap}>
          <table className={styles.index}>
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Status</th>
                <th scope="col">Runs on</th>
                <th scope="col">
                  <span className={styles.srOnly}>Links</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((p) => (
                <tr key={p.name}>
                  <td>
                    <ExtLink href={p.href} className={styles.indexName}>
                      {p.name}
                    </ExtLink>
                  </td>
                  <td>
                    <StatusTag status={p.status} />
                  </td>
                  <td className={styles.indexRuns}>{p.runsOn}</td>
                  <td className={styles.indexLinks}>
                    {p.links.map((l) => (
                      <ExtLink key={l.label} href={l.href} className={styles.indexLink}>
                        {l.label}
                      </ExtLink>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </header>
  );
}

export function Services() {
  return (
    <SectionShell
      id="services"
      title="What Thompson Software builds"
      intro="One engineer from first call to final deploy. The person who scopes the work writes the code and supports it after launch.">
      <Reveal>
        <div className={styles.svcList}>
          {SERVICES.map((s) => (
            <div key={s.name} className={styles.svcRow}>
              <div className={styles.svcName}>{s.name}</div>
              <div className={styles.svcDetail}>{s.detail}</div>
              <div className={styles.svcProof}>{s.proof}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className={styles.svcFoot}>
          Engagements run as scoped builds, update plans, or monthly retainers.
          Most projects start with a conversation and a ballpark estimate.{''}
          <ExtLink href={ESTIMATE} className={styles.footLink}>
            Get an estimate
          </ExtLink>
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function Work() {
  return (
    <SectionShell
      id="work"
      title="Selected work"
      intro="Products I've designed and built — live apps, and the Julian Suite in progress.">
      <Reveal>
        <article className={styles.workItem}>
          <div className={styles.workHead}>
            <h3 className={styles.workTitle}>
              Julian Suite <StatusTag status="progress" />
            </h3>
            <p className={styles.workBlurb}>
              Six apps in one suite, each a standalone service — encrypted
              notes, peer-to-peer video meetings, encrypted messaging, cloud
              storage, two-factor auth, and a password manager.
            </p>
          </div>
          <div className={styles.suiteApps}>
            {SUITE_APPS.map((app) => (
              <div key={app.name} className={styles.suiteAppRow}>
                <ExtLink href={app.href} className={styles.suiteAppName}>
                  {app.name}
                </ExtLink>
                <span className={styles.suiteAppDesc}>{app.desc}</span>
              </div>
            ))}
          </div>
          <div className={styles.workLinks}>
            <ExtLink
              href={`${STUDIO}/#projects`}
              className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
              Suite overview
            </ExtLink>
          </div>
        </article>
      </Reveal>

      <div className={styles.workGrid}>
        <Reveal delay={60}>
          <article className={styles.workItem}>
            <div className={styles.workHead}>
              <h3 className={styles.workTitle}>
                LiveFromWisco <StatusTag status="live" />
              </h3>
              <p className={styles.workBlurb}>
                A moderated live feed where Wisconsinites share wild local
                moments. Grew to 28,000+ users across web, iOS, and Android,
                supporting local events, media, and small businesses.
              </p>
            </div>
            <div className={styles.workLinks}>
              <ExtLink
                href="https://www.livefromwisco.com"
                className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
                Website
              </ExtLink>
              <ExtLink
                href="https://apps.apple.com/us/app/live-from-wisco/id6762004757"
                className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
                App Store
              </ExtLink>
              <ExtLink
                href="https://play.google.com/store/apps/details?id=com.livefromwisco.app"
                className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
                Google Play
              </ExtLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className={styles.workItem}>
            <div className={styles.workHead}>
              <h3 className={styles.workTitle}>
                Luna <StatusTag status="live" />
              </h3>
              <p className={styles.workBlurb}>
                A private cycle and period tracker. Logging, symptoms, and
                predictions stored on your device, with no account required.
              </p>
            </div>
            <div className={styles.workLinks}>
              <ExtLink
                href="https://apps.apple.com/us/app/luna-private-cycle-tracker/id6769168539"
                className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
                App Store
              </ExtLink>
              <ExtLink
                href="https://play.google.com/store/apps/details?id=me.tylerthompson.apps.luna"
                className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
                Google Play
              </ExtLink>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <article className={styles.workItem}>
          <div className={styles.workHead}>
            <h3 className={styles.workTitle}>
              Browser extensions <StatusTag status="live" />
            </h3>
            <p className={styles.workBlurb}>
              Small tools that run entirely in the browser. IconForge converts
              and resizes images with no uploads. The Daycare Cost Calculator
              reads calendar attendance and turns it into a monthly cost
              breakdown. Both are privacy-first and live in the Chrome Web
              Store, with builds for Firefox, Safari, and Edge.
            </p>
          </div>
          <div className={styles.workLinks}>
            <ExtLink
              href="https://chromewebstore.google.com/detail/iconforge/gjmldlopocodgjkofpbkmeopmjfgngeg"
              className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
              IconForge
            </ExtLink>
            <ExtLink
              href="https://chromewebstore.google.com/detail/daycare-cost-calculator/hhnbegodboonhnlflpdiemobmpofiole"
              className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
              Daycare Cost Calculator
            </ExtLink>
          </div>
        </article>
      </Reveal>

      <Reveal delay={120}>
        <article className={styles.workItem}>
          <div className={styles.workHead}>
            <h3 className={styles.workTitle}>
              Open source <StatusTag status="live" />
            </h3>
            <p className={styles.workBlurb}>
              google-play-console-mcp puts Play Console reporting inside AI
              tooling. Every API path is validated against an allowlist before
              it reaches Google — the same discipline the Julian Suite is built on.
            </p>
          </div>
          <div className={styles.codeCard}>
            <div className={styles.codeHead}>
              <span className={styles.codeFile}>
                src/api/android-publisher-invoke.ts
              </span>
              <ExtLink href={INVOKE_SOURCE} className={styles.codeLink}>
                View source
              </ExtLink>
            </div>
            <pre className={styles.codeBlock}>
              <code>{INVOKE_SNIPPET}</code>
            </pre>
          </div>
          <div className={styles.workLinks}>
            <ExtLink
              href="https://github.com/tylerthompson/google-play-console-mcp"
              className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
              google-play-console-mcp
            </ExtLink>
            <ExtLink
              href="https://github.com/tylerthompson"
              className={clsx(styles.btn, styles.btnGhost, styles.btnSm)}>
              More on GitHub
            </ExtLink>
          </div>
        </article>
      </Reveal>
    </SectionShell>
  );
}

export function Experience() {
  return (
    <SectionShell
      id="experience"
      title="Background"
      intro="Fifteen years of engineering, most of it keeping systems alive.">
      <Reveal>
        <div className={styles.expList}>
          {EXPERIENCE.map((e) => (
            <div key={e.org} className={styles.expRow}>
              <div className={styles.expOrg}>{e.org}</div>
              <div className={styles.expRole}>{e.role}</div>
              <div className={styles.expDetail}>{e.detail}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className={styles.svcFoot}>
          <strong>How I work:</strong> equally comfortable on a team or
          flying solo — test-driven development, CI/CD pipelines, and AWS
          are standard practice, not exceptions. I communicate clearly,
          own projects end to end, and write code the next engineer can
          pick up.
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function Writing() {
  return (
    <SectionShell
      id="writing"
      title="Writing"
      intro="Notes on building software that lasts.">
      <Reveal>
        <Link href="/blog/building-with-depth" className={styles.postCard}>
          <div className={styles.postMeta}>
            April 8, 2026 · Engineering, architecture, product
          </div>
          <h3 className={styles.postTitle}>
            Building Products With Enterprise Discipline
          </h3>
          <p className={styles.postExcerpt}>
            Great products come from a balance of speed and rigor. Clear
            boundaries, production observability, pragmatic testing, and
            thoughtful iteration — the habits that ship in enterprise and
            founder environments alike.
          </p>
          <span className={styles.postMore}>
            Read the post <ArrowIcon dir="right" className={styles.linkArrow} />
          </span>
        </Link>
      </Reveal>
      <Reveal delay={100}>
        <p className={styles.svcFoot}>
          <Link to="/blog" className={styles.footLink}>
            All writing
          </Link>
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function Contact() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.ctaTitle}>Have something to build?</h2>
          <p className={styles.ctaSub}>
            Tell me what you&rsquo;re making. I&rsquo;ll get back to you,
            usually within a business day, with honest advice on scope, stack,
            and whether I&rsquo;m the right fit.
          </p>
        </Reveal>
        <Reveal delay={120} className={styles.heroActions}>
          <ExtLink
            href={START_PROJECT}
            className={clsx(styles.btn, styles.btnPrimary)}>
            Start a project
          </ExtLink>
          <ExtLink href={LINKEDIN} className={clsx(styles.btn, styles.btnGhost)}>
            LinkedIn
          </ExtLink>
          <ExtLink href={GITHUB} className={clsx(styles.btn, styles.btnGhost)}>
            GitHub
          </ExtLink>
        </Reveal>
      </div>
    </section>
  );
}
