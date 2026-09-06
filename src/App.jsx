import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Specialties from './components/Specialties/Specialties';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Team from './components/Team/Team';
import Differentials from './components/Differentials/Differentials';

export function App() {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Specialties />
        <HowItWorks />
        <Team />
        <Differentials />
      </main>
    </div>
  );
}

export default App;
