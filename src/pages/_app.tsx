import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '@components/Layouts/Layouts'
import { TodoProvider } from '@context/todoProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <TodoProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
    </TodoProvider>
  )
}

export default MyApp
