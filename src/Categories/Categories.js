import React, { useState } from 'react';
import './Categories.css';
import img3 from '../Images/img3.jpg';

function Categories() {
  const categories = [  {    name: "Petit déjeuner",    choices: [      { name: "Oeufs brouillés", description: "Oeufs brouillés avec du bacon et des toasts" },      { name: "Pancakes", description: "Pancakes avec sirop d'érable et fruits frais" },      { name: "Smoothie bowl", description: "Bol de smoothie aux fruits rouges et granola" }    ]
},
{
  name: "Déjeuner",
  choices: [
    { name: "Burger", description: "Burger avec du boeuf grillé et frites maison" },
    { name: "Salade César", description: "Salade César avec poulet grillé et croûtons" },
    { name: "Wrap végétarien", description: "Wrap aux légumes grillés et houmous" },
    { name: "Pâtes à la bolognaise", description: "Pâtes à la sauce bolognaise maison" },
    { name: "Pizza Margherita", description: "Pizza Margherita avec tomates et basilic frais" }
  ]
},
{
  name: "Dîner",
  choices: [
    { name: "Steak grillé", description: "Steak grillé avec légumes rôtis et pommes de terre sautées" },
    { name: "Poisson grillé", description: "Filet de poisson grillé avec riz et légumes vapeur" },
    { name: "Curry de légumes", description: "Curry de légumes avec riz basmati" },
    { name: "Tacos au poulet", description: "Tacos au poulet grillé avec salsa maison et guacamole" },
    { name: "Ragoût de boeuf", description: "Ragoût de boeuf mijoté avec légumes et pommes de terre" },
    { name: "Risotto aux champignons", description: "Risotto crémeux aux champignons et parmesan" },
    { name: "Sushi", description: "Assortiment de sushi avec saumon, thon et avocat" }
  ]
},
{
  name: "Collations",
  choices: [
    { name: "Fruits frais", description: "Assortiment de fruits frais de saison" },
    { name: "Houmous et légumes", description: "Assortiment de légumes frais avec houmous" }
  ]
},
{
  name: "Boissons",
  choices: [
    { name: "Smoothie aux baies", description: "Smoothie aux baies et lait d'amande" },
    { name: "Café glacé", description: "Café glacé avec lait et sirop de vanille" },
    { name: "Thé glacé maison", description: "Thé glacé maison aux agrumes" },
    { name: "Jus de fruits frais", description: "Jus de fruits frais pressé à la minute" }
  ]
}
];


  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (index) => {
    
    setSelectedCategory((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="categories" id="categories">
      <div className="heading">
        <h1>Delecious Dishes</h1>
        <span>Categories</span>
      </div>

      <div className={`categories-container ${selectedCategory!==null ?'is':''} `}>
      {categories.map((category, index) => (
  <div className={`box ${selectedCategory === index ? 'selected ' : ''} ${selectedCategory !== null && selectedCategory !== index ? 'is' : ''} `} key={index}>
    <div className='boxin'>
      <img src={img3} alt={category.name} />
    <h2>{category.name}</h2>
    <span>{category.choices.length} choix</span>
    <i
      className={`bx ${
        selectedCategory === index ? 'bx-left-arrow-alt' : 'bx-right-arrow-alt'
      }`}
      onClick={() => toggleCategory(index)}
    ></i>
    </div>
    
    {selectedCategory === index && (
      <div className={`choices ${selectedCategory!==null ?'is':''} `}>
        {category.choices.map((choice, index) => (
          <div key={index}>
            <h3>{choice.name}</h3>
            <p>{choice.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>
))}

      </div>
    </section>
  );
}

export default Categories;


