import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

export function App() {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}

export default App;
