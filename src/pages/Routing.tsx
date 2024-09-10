import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Example from "./Example"

function Routing() {
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/example" element={<Example/>}/>
		</Routes>
	)
}

export default Routing