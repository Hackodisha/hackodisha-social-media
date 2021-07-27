import './App.css'
import './components/style/hackodisha.scss';
import Hackodisha from './components/hackodisha';
import SocialLinks from './components/socialLinks';
import Footer from './components/footer/footer';

function App() {
  return (
    <main>
      <Hackodisha />
      <SocialLinks />
      <Footer/>
    </main>
  );
}

export default App;
