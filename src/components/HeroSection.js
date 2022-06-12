import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import  Button  from './Button';
import './HeroSection.css';

function HeroSection({setSelectedItem}) {
  const [count, setCount] = useState(0);
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);


  function moveLeft() {
      if(count===0) {
          setShowOne(false)
          setShowThree(true)
          setCount(2);
      } else if(count===1) {
        setShowOne(true)
        setShowTwo(false)
        setCount(count-1);
      } else if (count===2) {
        setShowTwo(true)
        setShowThree(false)
          setCount(count-1);
      }

  }
  function moveRight() {
      if(count===0) {
          setShowOne(false)
          setShowTwo(true)
          setCount(1);
      } else if(count===1) {
        setShowTwo(false)
        setShowThree(true)
        setCount(2);
      } else if (count===2) {
        setShowThree(false)
        setShowOne(true)
          setCount(0);
      }

  }


  function selectShoeOne() {
    setSelectedItem('shoeOne')
  }
  function selectShoeTwo() {
    setSelectedItem('shoeTwo')
  }
  function selectShoeThree() {
    setSelectedItem('shoeThree')
  }


  return (
    <div className='hero-container'>
      <i onClick={moveLeft} id='chevron-left-home' className="fa-solid fa-chevron-left"></i>
      
        <div className={showTwo? 'intro-text one' : 'intro-text one invisible'}>
          <h2>Exclusive New Deal</h2>
              <h1>Nike Black Court</h1>
              <p>What are you waiting for?</p>
              <div className='hero-btns'>
                <Button
                  onClick={selectShoeOne}
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  path={selectShoeOne}
                >
                  See Product
                </Button>
              </div>
        </div>
        <div className={showOne ? 'intro-text intro-two' : 'intro-text two invisible'}>
              <h2>Exclusive New Deal</h2>
              <h1>New Balance Navy</h1>
              <p>
              What are you waiting for?
              </p>
              <div className='hero-btns'>
                <Button
                onClick={selectShoeTwo}
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  path={selectShoeTwo}
                >
                   See Product
                </Button>
              </div>
        </div>
        <div className={showThree ? 'intro-text three' : 'intro-text three invisible'}>
              <h2>Exclusive New Deal</h2>
              <h1>Black Melvin Derby</h1>
              <p>What are you waiting for?</p>
              <div className='hero-btns'>
                <Button
                onClick={selectShoeThree}
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  path={selectShoeThree}
                >
                   See Product
                </Button>
              </div>
        </div>

        <Link className={showTwo ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'} onClick={selectShoeOne} to={'/products'}>
      <div className={showTwo ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'}>
          <img className='shoe-image-link'  src={require('../images/nikeshoesnobackground.png')} alt="" />
      </div>
      </Link>
       <Link className={showOne ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'} onClick={selectShoeTwo} to={'/products'}>
      <div className={showOne ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'}>
      <img className='shoe-image-link' src={require('../images/newbalancenobackground.png')} alt="" />
      </div>
      </Link>
      <Link className={showThree ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'} onClick={selectShoeThree} to={'/products'}>
      <div className={showThree ? 'shoe-image-hero one' : 'shoe-image-hero one invisible'}>
         
          <img className='shoe-image-link'  src={require('../images/suitshownobackground.png')} alt="" />
      </div>
      </Link>
      <i onClick={moveRight} id='chevron-right-home' className="fa-solid fa-chevron-right"></i>
      </div>
  );
}

export default HeroSection;








