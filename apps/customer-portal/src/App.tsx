import { Button } from "@repo/ui";
import { sum } from "@repo/utils";
function App() {
	return (
		<>
			<h1>Complete life style</h1>
			<Button title={"This is a button"} />
			{sum(10, 20)}
		</>
	);
}

export default App;
