import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Rubik, sans-serif;
  }

  a{
    text-decoration: none;
  }
`

const size = {
  mobileS: '0px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const Theme = {
  colors:['#FFFFFF','#000000','#7634bf','#e03584','#161616','#f1f1f1'],
  colorsTrans:['#7634bf52','#00000021'],
  device :{
    mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.laptop})`,
    mobileM: `(min-width: ${size.mobileM}) and (max-width: ${size.laptop})`,
    mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.laptop})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  }
}
 
export default function App({ Component, pageProps }) {

  return (
    <> 
      <Head>
        <title>Unik-CaboFrio - Site Exemplo 01</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Author: Unik Cabo Frio, Projeto 01 - Criação de Site"></meta>
      </Head>

      <GlobalStyle/>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}