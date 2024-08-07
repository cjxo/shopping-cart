import AlbertEinsteinImg from "../assets/testimonial-pic/e-mc-squared-guy.jpg";
import HarryPotter from "../assets/testimonial-pic/hairy-potter.jpg";
import DarthVader from "../assets/testimonial-pic/darth-vader.jpg";
import { useState } from "react";

import PropTypes from 'prop-types';

const TestimonyPersonListEntry = ({ name, profession, img, isSelected, onClick }) => {
  return (
    <li className={isSelected ? "selected" : ""} onClick={onClick}>
      <img src={img} />
      <div>
        <div>{name}</div>
        <div>{profession}</div>
      </div>
    </li>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      id: 0,
      name: "Albert Einstein",
      profession: "Theoretical Physicist",
      img: AlbertEinsteinImg,
      quote: `"Relativity? No, try Fashion Hive. I might have cracked the code of the universe, 
              but Fashion Hive cracked the code of timeless style. E = mc² is nothing compared to their 
              effortlessly cool factor. If only they made lab coats"`
    },
    {
      id: 1,
      name: "Harry Potter",
      profession: "The Chosen One",
      img: HarryPotter,
      quote: `"Accio Fashion Hive! Their clothes have more magic than the elder wand. 
              I once wore their outfit to a Quidditch match, and even the Golden Snitch
              couldn't keep up with my style! Bloody Hell."`
    },
    {
      id: 2,
      name: "Darth Vader",
      profession: "Sith Lord",
      img: DarthVader,
      quote: `"I find your lack of faith in Fashion Hive disturbing. Their outfits are as imposing 
              as my presence and as sophisticated as my strategy. Join me, and together, we'll
              make fashion as formidable as the Galactic Empire."`
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);

  const onClick = (idx) => {
    return () => {
      setSelectedIdx(idx);
    };
  };

  return (
    <>
      <h1 className="testimonial-header">Testimonials</h1>
      <section className="testimonial-container">
        <ul className="testimonial-people">
          {
            testimonials.map(testimonial => {
              return (
                <TestimonyPersonListEntry
                  key={testimonial.id}
                  name={testimonial.name}
                  profession={testimonial.profession}
                  img={testimonial.img}
                  isSelected={selectedIdx === testimonial.id}
                  onClick={onClick(testimonial.id)}
                />
              )
            })
          }
        </ul>

        <p>
          <em>
            {testimonials[selectedIdx].quote}
          </em>
        </p>
      </section>
    </>
  );
}

TestimonyPersonListEntry.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export { TestimonyPersonListEntry };
export default Testimonials;