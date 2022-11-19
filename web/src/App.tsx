// components
import { Header } from './components/Header';
import { Orders } from './components/Orders';

// styles
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  )
}
