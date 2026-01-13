import "./App.css"
import ProductItem from "./components/ProductItem"

function App() {
    const products = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
    ]
    return (
        <div>
            {products.map((p) => (
                <ProductItem key={p.id} data={p} />
            ))}
        </div>
    )
}

export default App
