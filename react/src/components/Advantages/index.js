import phoneOne from "../../assets/img/phone-01.jpg"
import phoneTwo from "../../assets/img/phone-02.jpg"
import phoneThree from "../../assets/img/phone-03.jpg"

import styles from "./advantages.module.scss"

function Vantagens() {
  return (
    <div className={styles.advantages}>
      <h1>Vantagens</h1>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <img src={phoneOne} alt="Integração abrangente" />
          <div className={styles.inner}>
            <h1>01</h1>
            <h3>Integração abrangente</h3>
            <p>Oferecemos uma experiência integrada ao centralizar informações de saúde, conselhos nutricionais, lembretes para exames e exercícios, simplificando a gestão da saúde.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={phoneTwo} alt="Personalização e Prevenção Proativa" />
          <div className={styles.inner}>
            <h1>02</h1>
            <h3>Personalização e Prevenção Proativa</h3>
            <p>Personalizamos recomendações com base em análises de dados, calculando taxas de variação para intervenções preventivas adaptadas às necessidades individuais dos usuários.</p>
          </div>
        </div>
  
        <div className={styles.box}>
          <img src={phoneThree} alt="Eficiência Operacional e Sustentabilidade" />
          <div className={styles.inner}>
            <h1>03</h1>
            <h3>Eficiência Operacional e Sustentabilidade</h3>
            <p>Otimiza recursos hospitalares usando conceitos matemáticos, reduzindo o consumo de descartáveis e demonstrando compromisso com eficiência e sustentabilidade.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vantagens