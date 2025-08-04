import Button from './components/Button';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';

function App() {
	return (
		<div className="flex">
			<Button
				text="Share Brain"
				variant="primary"
				startIcon={<ShareIcon />}></Button>
			<Button
				text="Add Button"
				variant="secondary"
				startIcon={<PlusIcon />}></Button>
		</div>
	);
}

export default App;
