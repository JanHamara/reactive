import logo from '../../assets/img/logo.svg';
import './rm_navigation.css';

function ReactiveNavigation() {
  return (
    <div className="rm-navigation">
        <div className="rm-navigation-logo">
            <img src={logo} alt="navigation-logo"/>
            <div className="rm-navigation-logo-text">REACT<span>ive</span></div>
        </div>
    </div>
  );
}

export default ReactiveNavigation;
