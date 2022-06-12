import React, { useState } from 'react';
import '../../App.css'
import './Products.css'
import Button from '../Button'
import ShoeData from '../data/ProductData'

export default function Products({item}) {     
    const [count, setCount] = useState(0);
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [buttonState, setButtonState] = useState(true);
    const [showSizeChart, setShowSizeChart] = useState(false);

   

    let title = ShoeData[item].name;        
    let desc = ShoeData[item].description;
     let image = ShoeData[item].imageOne;
     let imageTwo = ShoeData[item].imageTwo;
     let imageThree = ShoeData[item].imageThree;
     let imageFour = ShoeData[item].imageFour;
     
     function moveLeft() {
        if(count===0) {
            setShowOne(false)
            setShowFour(true)
            setCount(3);
        } else if(count===1) {
          setShowOne(true)
          setShowTwo(false)
          setCount(count-1);
        } else if (count===2) {
          setShowTwo(true)
          setShowThree(false)
            setCount(count-1);
        }
         else if (count===3) {
          setShowThree(true)
          setShowFour(false)
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
          setShowFour(true)
          setCount(3);
        }
         else if (count===3) {
          setShowFour(false)
          setShowOne(true)
            setCount(0);
        }
  
    }

    function selectOne() {
        setShowOne(true)
        setShowTwo(false)
        setShowThree(false)
        setShowFour(false)
        setCount(0)
    }
    function selectTwo() {
        setShowOne(false)
        setShowTwo(true)
        setShowThree(false)
        setShowFour(false)
        setCount(1)
    }
    function selectThree() {
        setShowOne(false)
        setShowTwo(false)
        setShowThree(true)
        setShowFour(false)
        setCount(2)
    }
    function selectFour() {
        setShowOne(false)
        setShowTwo(false)
        setShowThree(false)
        setShowFour(true)
        setCount(3)
    }

    function handleChange(e) {
        let {name, value} = e.target;
        console.log(value)
        if(value === 'out') {   
            console.log('false')
            setButtonState(true)
        } else {
            setButtonState(false)
        }
        }

        function showChart(e) {
            if(e.target.className === 'size-chart') {
                setShowSizeChart(true)
            } else {
                setShowSizeChart(false)
            }
           
        }
        

    return (
        <>
            
            <div onClick={showChart} className={"products-container"}>
                <div className={'size-chart-container'} id={showSizeChart ? '' : 'invisible'}>
                        <div className="chart-image">

                        </div>
                </div>
        
                <div className="shoe-products">
                <div className="small-products">
                    <div onClick={selectOne} className="small-product">
                        <img src={image} alt="" />
                    </div>
                    <div  onClick={selectTwo}  className="small-product">
                             <img src={imageTwo} alt="" />
                    </div>
                    <div  onClick={selectThree}  className="small-product">
                            <img src={imageThree} alt="" />
                    </div>
                    <div  onClick={selectFour}   className="small-product">
                         <img src={imageFour} alt="" />
                    </div>
                </div>
                <h1 id='mobile-title'>{title} </h1>
                <div className="large-product">
                    <i onClick={moveLeft} className="fa-solid fa-chevron-left " id='product-chevron-left'></i>
                        <img className={showOne ? 'large-one' : 'large-one invisible'} src={image} alt="" />
                        <img className={showTwo ? 'large-one' : 'large-one invisible'} src={imageTwo} alt="" />
                        <img className={showThree ? 'large-one' : 'large-one invisible'} src={imageThree} alt="" />
                        <img className={showFour ? 'large-one' : 'large-one invisible'} src={imageFour} alt="" />
                    <i onClick={moveRight} className="fa-solid fa-chevron-right"  id='product-chevron-right'></i>
                </div>
            </div>

                <div className="products-info">
                    <h2>£70</h2>
                    <h1 id='desktop-title' >{title} </h1>
                     <p>{desc} </p>
                       <p  className='size-chart'>Size Chart</p>
                    <select onChange={handleChange} name="size" id="size-select">
                        <option  value="">--Choose a size--</option>
                        <option value="7">7</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="8.5">8.5</option>
                        <option value="out">out of stock</option>
                        <option value="9.5">9.5</option>
                        <option value="out">out of stock</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                    </select>
                    <Button  
                    className={ 'btn'}
                    buttonStyle='disable-button'
                    buttonSize='btn--large'
                    disable={buttonState ? 'disable-button' : 'able'}>
                        Add to cart
                    </Button>
                </div>
            </div>
        
        
        </>
    )
}