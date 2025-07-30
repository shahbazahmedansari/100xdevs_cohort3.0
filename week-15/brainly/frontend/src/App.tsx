import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';

function App() {
	return (
		<>
			<Button
				title="Add Content"
				size={'sm'}
				startIcon={<PlusIcon size={'sm'} />}></Button>
			<Button
				title="Share"
				size={'md'}
				startIcon={<PlusIcon size={'md'} />}></Button>
			<Button
				title="Submit"
				size={'lg'}
				startIcon={<PlusIcon size={'lg'} />}></Button>
		</>
	);
}

export default App;
