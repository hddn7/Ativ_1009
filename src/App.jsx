import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const technologies = ['JavaScript', 'Python', 'Java', 'SQL', 'HTML & CSS', 'React', 'Git & GitHub'];

const projects = [
  {
    number: '01',
    title: 'Organiza+',
    type: 'PROJETO ACADÊMICO · UX + FRONT-END',
    description: 'Uma proposta de interface para ajudar estudantes a organizar tarefas, prazos e rotina de estudos.',
    tags: ['React', 'CSS', 'Figma'],
    href: 'https://github.com/',
    color: 'project-green',
  },
  {
    number: '02',
    title: 'Dados em foco',
    type: 'ESTUDO · BANCO DE DADOS',
    description: 'Modelagem relacional e consultas SQL para transformar registros em informação mais útil.',
    tags: ['SQL', 'Modelagem', 'Python'],
    href: 'https://github.com/',
    color: 'project-blue',
  },
];

function App() {
  return (
    <main>
      <header className="topbar wrap">
        <a className="wordmark" href="#inicio" aria-label="Voltar ao início">SN<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="availability" href="mailto:seuemail@exemplo.com"><span /> Aberto a oportunidades</a>
      </header>

      <section className="hero wrap" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ESTUDANTE DE SISTEMAS DE INFORMAÇÃO · UMC</p>
          <h1>Tecnologia<br />com <span>contexto.</span></h1>
          <p className="hero-intro">Oi, eu sou <strong>Seu Nome</strong>. Estou aprendendo a transformar problemas reais em soluções digitais simples, úteis e bem pensadas.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projetos">Conheça meu trabalho <ArrowDown size={16} /></a>
            <a className="text-link" href="mailto:seuemail@exemplo.com">Vamos conversar <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Composição gráfica com formas e elementos de tecnologia" role="img">
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-disc"><span>SI</span></div>
          <div className="art-tag tag-top">IDEIAS → CÓDIGO</div>
          <div className="art-tag tag-bottom">MOGI DAS CRUZES, SP</div>
          <span className="art-spark spark-one">✳</span>
          <span className="art-spark spark-two">+</span>
          <span className="art-coordinate">23°31′S<br />46°11′W</span>
        </div>
        <a className="scroll-cue" href="#sobre"><span>ROLE PARA EXPLORAR</span><ArrowDown size={14} /></a>
      </section>

      <section className="about section-band" id="sobre">
        <div className="wrap about-layout">
          <div className="section-index"><span>01</span> / SOBRE MIM</div>
          <div className="about-content">
            <h2>Entre lógica,<br />curiosidade e <span>impacto.</span></h2>
            <p>Sou estudante de Sistemas de Informação na Universidade de Mogi das Cruzes. Tenho interesse em desenvolvimento de software, dados e na forma como a tecnologia pode tornar o dia a dia mais simples.</p>
            <p>Minha jornada está em construção: cada projeto é uma oportunidade de aprender, colaborar e transformar conceitos da faculdade em experiências práticas.</p>
            <div className="education"><span className="education-mark">UMC</span><div><strong>Universidade de Mogi das Cruzes</strong><small>Bacharelado em Sistemas de Informação · Em andamento</small></div><ArrowUpRight size={17} /></div>
          </div>
        </div>
      </section>

      <section className="stack wrap" aria-labelledby="stack-heading">
        <div className="section-index"><span>02</span> / FERRAMENTAS</div>
        <div className="stack-content">
          <div className="stack-heading"><h2 id="stack-heading">Aprendendo,<br />praticando, <span>evoluindo.</span></h2><p>Tecnologias e fundamentos que fazem parte da minha formação e dos meus estudos.</p></div>
          <div className="tech-list">{technologies.map((technology, index) => <div className="tech-item" key={technology}><span className="tech-number">0{index + 1}</span><span>{technology}</span><ArrowUpRight size={15} /></div>)}</div>
        </div>
      </section>

      <section className="projects section-band" id="projetos">
        <div className="wrap">
          <div className="projects-heading"><div><div className="section-index"><span>03</span> / EM CONSTRUÇÃO</div><h2>Projetos com<br /><span>propósito.</span></h2></div><p>Ideias que saíram do papel ou estão tomando forma durante meus estudos.</p></div>
          <div className="project-grid">
            {projects.map((project) => <article className={`project-card ${project.color}`} key={project.number}>
              <div className="project-card-top"><span>{project.number} / 02</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} no GitHub`}><ArrowUpRight size={19} /></a></div>
              <div className="project-visual" aria-hidden="true"><div className="visual-window"><span /><span /><span /><div className="visual-lines"><i /><i /><i /></div></div><div className="visual-shape" /></div>
              <div className="project-info"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>)}
          </div>
        </div>
      </section>

      <footer className="contact wrap" id="contato">
        <div className="section-index"><span>04</span> / CONTATO</div>
        <div className="contact-main"><p className="eyebrow">TEM UMA IDEIA OU OPORTUNIDADE?</p><h2>Vamos fazer<br />algo <span>que importa.</span></h2><a className="button button-lime" href="mailto:seuemail@exemplo.com">Entre em contato <ArrowUpRight size={17} /></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#inicio">SN<span>.</span></a><p>Feito com curiosidade em Mogi das Cruzes, SP.</p><div className="social-links"><a href="mailto:seuemail@exemplo.com" aria-label="Enviar e-mail"><Mail size={18} /></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div><span className="copyright">© 2026</span></div>
      </footer>
    </main>
  );
}

export default App;