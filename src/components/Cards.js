import {React} from 'react'
import CardItem from './CardItem'
import   './Cards.css'

function Cards({setSelectedItem}) {
    
   

    function selectShoeOne() {
        setSelectedItem('shoeOne')
    }


      function selectShoeTwo() {
        setSelectedItem('shoeTwo')
      }
      function selectShoeThree() {
        setSelectedItem('shoeThree')
      }
      function selectShoeFour() {
        setSelectedItem('shoeFour')
      }
      function selectShoeFive() {
        setSelectedItem('shoeFive')
      }

  return (
    <div className='cards'>
        <h1>Check out our incredible products</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                   
                    <CardItem shoe={selectShoeOne} setSelectedItem={setSelectedItem}  src={require('../images/nike.jpg') }
                    text='Nike Black Court Check Them Out Here'
                    label='Casual'
                    path='//products'/>
                    
                    
                    <CardItem shoe={selectShoeTwo} setSelectedItem={setSelectedItem}  src={require('../images/newbalance.jpg') }
                    text='New Balance Navy Check Them Out Here'
                    label='Casual'
                    path='/products'/>
                    
                </ul>
                <ul className="cards__items">
                
                    <CardItem shoe={selectShoeThree} setSelectedItem={setSelectedItem}   src={require('../images/derby.jpg')}
                    text='Derby Suit Shoes Check Them Out Here'
                    label='Trainers'
                    path='/products'/>
                 
                
                    <CardItem shoe={selectShoeFour} setSelectedItem={setSelectedItem}  src={require('../images/converse.jpg')}
                    text='White Converse Check Them Out Here'
                    label='Trainers'
                    path='/products'/>
                
                
                    <CardItem shoe={selectShoeFive} setSelectedItem={setSelectedItem}   src={require('../images/bluesuedeshoes.png')}
                    text='Adidas Gazelle Check Them Out Here'
                    label='Casual'
                    path='/products'/>
                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards