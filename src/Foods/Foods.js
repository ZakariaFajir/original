import React, { useState } from 'react';
import './Foods.css';
import img4 from '../Images/img4.jpeg';

function Foods() {
const [showAll, setShowAll] = useState(false);

const toggleShowAll = () => {
setShowAll(!showAll);
};

const foods = [
{
name: 'Aliment 1',
description: 'Description de l\'aliment 1',
price: 10,
},
{
name: 'Aliment 2',
description: 'Description de l\'aliment 2',
price: 12,
},
{
name: 'Aliment 3',
description: 'Description de l\'aliment 3',
price: 15,
},
{
name: 'Aliment 4',
description: 'Description de l\'aliment 4',
price: 20,
},
{
name: 'Aliment 5',
description: 'Description de l\'aliment 5',
price: 18,
},
{
name: 'Aliment 6',
description: 'Description de l\'aliment 6',
price: 22,
},
];

return (
<section className='foods' id="foods">
<div className="heading">
<h1>Nos aliments</h1>
{!showAll && (
<button onClick={toggleShowAll} className="btn btn-see-All">
Voir tout<i className="bx bx-right-arrow-alt"></i>
</button>
)}
</div>
<div className="food-container">
    {(showAll ? foods : foods.slice(0, 3)).map((food, index) => (
      <div className="food" key={index}>
        <img src={img4} alt={food.name} />
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <span>${food.price}.00</span>
      </div>
    ))}
  </div>
</section>
);
}

export default Foods;