import HeroImg from '../images/hero-img.jpg';
import HeroPath from '../images/hero-path.svg';
import HeroPath2 from '../images/hero-path2.svg';
import HeroPath3 from '../images/hero-path3.svg';
import HeroPath4 from '../images/hero-path4.svg';
import HeroPath5 from '../images/hero-path5.svg';
import HeroShape1 from '../images/hero-shape1.svg';
import HeroShape2 from '../images/hero-shape2.svg';
import HeroPencil from '../images/hero-pencil.svg';
import ArrowHead from '../images/arrow-head.svg'
import ArrowHead2 from '../images/arrow-head2.svg'
import ArrowTail from '../images/arrow-tail.svg'
import ArrowTail2 from '../images/arrow-tail2.svg'

const Hero = (props) => {
    return <div>
        <img className="hero__path" src={HeroPath} alt=""/>
        <img className="hero__path2" src={HeroPath2} alt=""/>
        <img className="hero__path3" src={HeroPath3} alt=""/>
        <img className="hero__path4" src={HeroPath4} alt=""/>
        <img className="hero__path5" src={HeroPath5} alt=""/>
        <img className="hero__pencil" src={HeroPencil} alt=""/>
        <img className="arrow__head" src={ArrowHead} alt=""/>
        <img className="arrow__head2" src={ArrowHead2} alt=""/>
        <img className="arrow__tail" src={ArrowTail} alt=""/>
        <img className="arrow__tail2" src={ArrowTail2} alt=""/>
        <div className="hero">
            <img className="hero__shape" src={HeroShape1} alt=""/>
            <div className="hero__textnimg">
                <h1 className="hero__text">In which Sea do you want <br/><span>Your Business</span> to Swim?</h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="A blue and red whale"/>
                </div>
            </div>
            <img className="hero__shape2" src={HeroShape2} alt=""/>
        </div>
    </div>
}

export default Hero;