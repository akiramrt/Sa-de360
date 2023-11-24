import clsx from "clsx"

import heroImg from "../../assets/img/hero.jpg"
import styles from "./hero.module.scss"

const cx = clsx.bind(styles)

function Hero() {
  return (
    <div className={cx(styles.hero)}>
      <div className={cx(styles.grid, styles.grid1)}>
        <img src={heroImg} alt="Uma Jornada Integrada para o Bem-Estar Pessoal" />
      </div>
  
      <div className={cx(styles.grid, styles.grid2)}>
        <div className={cx(styles.left)}>
          <h1>Uma Jornada Integrada para o Bem-Estar Pessoal</h1>
        </div>

        <div className={cx(styles.right)}>
          <div className={cx(styles.destaque)}>
            <p>Uma plataforma inovadora que integra informações de saúde, oferece conselhos nutricionais, lembretes para exames e sugestões de exercícios, promovendo uma abordagem completa e personalizada para o bem-estar, tudo em um ambiente intuitivo e acessível.</p>
          </div>
          <button className={cx("btn btn-primary")}>Mais informações</button>
        </div>
      </div>
  
      <div className={cx(styles.grid, styles.grid3)}>
        <div className={cx(styles['grid-content'])}>
          <h2>Sobre nós</h2>
          <p>Uma solução abrangente para cuidados com a saúde, apresentando-se como um aplicativo inovador que visa proporcionar uma experiência integrada e proativa aos usuários. Essa plataforma multifuncional reúne diversas ferramentas e funcionalidades para gerenciar informações de saúde, oferecer orientações nutricionais personalizadas, configurar lembretes para exames médicos regulares, sugerir exercícios simples e muito mais.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles['grid-content'])}>
          <h2>Sobre a plataforma</h2>
          <p>Projetada para proporcionar uma abordagem integrada e abrangente aos cuidados com a saúde. Em resumo, a "Saúde360" visa ser uma solução completa que não apenas gerencia informações de saúde, mas também promove a prevenção, intervenções rápidas e um estilo de vida saudável para melhorar o bem-estar geral dos usuários.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles['grid-content'])}>
          <h2>Como funciona</h2>
          <p>Concebido como uma plataforma abrangente que integra diversas funcionalidades para oferecer uma experiência holística de cuidados com a saúde. Funcionará como uma ferramenta completa para cuidados com a saúde, utilizando dados, análises personalizadas e recomendações para capacitar os usuários a adotarem uma abordagem proativa em relação à sua saúde, promovendo uma vida saudável e equilibrada.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero