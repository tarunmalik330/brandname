
import './App.css';
import { useState, useEffect } from 'react';
import ClientMatters from './components/ClientMatters';
import Footer from './components/Footer';
import Header from './components/Header';
import MostPopular from './components/MostPopular';
import Newsletter from './components/Newsletter';
import OurCourses from './components/OurCourses';
import PopularCourses from './components/PopularCourses';
import QualityEducation from './components/QualityEducation';
import Loader from './components/Loader';
import BackToTop from "./assets/images/png/BackToTop.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -------------------preloader------------------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 3000);
  }, []);
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className='overflow-x-hidden'>
            <Header />
            <PopularCourses />
            <MostPopular />
            <OurCourses />
            <ClientMatters />
            <QualityEducation />
            <Newsletter />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "hover:shadow-[0_3px_8px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[54px] w-[54px] flex items-center justify-center rounded-[50px] bg-[#96BB7C] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </>
  );
}

export default App;
