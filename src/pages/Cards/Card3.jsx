import React from 'react';
import { Link } from 'react-router-dom';
import card3img from './img/card3.jpg'
import './style.css'

function Card3() {
  return (
    <div className='cont'>
      <img src={card3img} alt="" />
      <h2>CardPage</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt minus vitae esse, repellendus reiciendis enim quibusdam ipsum consequuntur atque numquam nulla a sed quod! Facere assumenda dolor neque distinctio qui earum saepe, eligendi reprehenderit aspernatur. Ad perferendis ut a magnam ducimus tempore error recusandae! Similique explicabo veritatis placeat reprehenderit.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio voluptatem incidunt nihil facere dolor quas explicabo, dolore voluptas ipsum consequuntur porro asperiores earum, quis laboriosam quaerat labore expedita inventore dicta ratione. Consectetur quidem, impedit dolore asperiores ut libero ipsa aliquid eos, veritatis quisquam dolor error soluta laudantium tenetur atque, suscipit voluptate animi! Aliquam ratione, vel accusantium mollitia dignissimos tempora eligendi voluptatibus amet suscipit nisi sed architecto ullam ipsa? Mollitia!
      </p>
      <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus enim incidunt voluptas sit? Harum aperiam quas doloribus, rerum totam officia ducimus dolorem itaque quidem at. Hic modi exercitationem itaque ad necessitatibus nam, quisquam praesentium beatae natus odit eos ipsam perspiciatis et voluptatum delectus! Quas aliquam quisquam amet blanditiis quis labore modi atque magni nobis, porro, perspiciatis dolores minima adipisci, error facilis non soluta corporis deleniti accusamus. Quae ratione, expedita error totam nihil ea nesciunt minus nemo dolorem quo impedit, id libero culpa similique enim at voluptates, alias odit deserunt doloremque molestias! Reprehenderit dolor asperiores rerum necessitatibus est dolores assumenda!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Card3;
