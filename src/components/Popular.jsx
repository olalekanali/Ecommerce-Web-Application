import POPULAR from "../assets/popular"
import Item from "./Item"


const Popular = () => {
  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <hr />
            {/* Container */}
            <div>
              {POPULAR.map((item) =>(
                <Item key={item.id} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
              ))}
            </div>
        </div>
    </section>
  )
}

export default Popular