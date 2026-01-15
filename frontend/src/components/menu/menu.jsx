import "./menu.css"



import React from 'react'

const Menu = ({ pizzas }) => {



  return (


    <div>

      {


        pizzas.map(pizza => (


          <div className="" key={pizza.id}>


            <span className="">{pizza.detail}</span>
            <span className="">{pizza.price}</span>
            <span className="">{pizza.name}</span>









          </div>
        )

        )}




      Menu


    </div>
  )
}

export default Menu