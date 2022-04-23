import styles from '../styles/Layout.module.css'
import Header from './Header'
import Content from './Content'

export default function Layout(props) {
      return(
          <div className={styles.layout}>
              <Header title={props.title}></Header>
              <Content>
                  {props.children}
              </Content>
          </div>
      )
}