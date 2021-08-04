import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);

	console.log(index);

	return (
		<div>
			<h2>{people[index].name}</h2>
			<h3>{people[index].job}</h3>
			<div className="img-container">
				<img className="person-img" src={people[index].image} alt="" />
			</div>
			<p>{people[index].text}</p>
			<button
				className="prev-btn"
				onClick={() =>
					setIndex((index) =>
						index > 0 ? index - 1 : people.length - 1 + index
					)
				}
			>
				PREV
			</button>
			<button
				className="next-btn"
				onClick={() => setIndex((index) => (index + 1) % people.length)}
			>
				NEXT
			</button>
			<div>
				<button
					className="random-btn"
					onClick={() =>
						setIndex(
							(index) =>
								(index + 1 + Math.floor(Math.random() * 3)) %
								people.length
						)
					}
				>
					RANDOM
				</button>
			</div>
		</div>
	);
};

export default Review;
