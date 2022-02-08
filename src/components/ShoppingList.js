import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList"

function ShoppingList() {
	const categories = plantList.reduce((acc, plant) =>
		acc.includes(plant.category) ? acc : acc.concat(plant.category), [])
	return (
		<div >
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
				
			</ul>
			
			<ul className="lmj-plant-list">
				{plantList.map((plant) => (
					<li key={plant.name} className="lmj-plant-item"> </li>
				))}

			</ul>

				</div>
	
		)



}


export default ShoppingList