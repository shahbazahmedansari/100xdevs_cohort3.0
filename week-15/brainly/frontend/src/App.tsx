import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import CreateContentModal from './components/CreateContentModal';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';
import Sidebar from './components/Sidebar';

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div>
			<Sidebar />
			<div className="p-4 ml-76 min-h-screen bg-gray-100">
				<CreateContentModal
					open={modalOpen}
					onClose={() => {
						setModalOpen(false);
					}}
				/>
				<div className="flex justify-end gap-4">
					<Button
						text="Add Content"
						variant="secondary"
						onClick={() => {
							setModalOpen(true);
						}}
						startIcon={<PlusIcon />}></Button>
					<Button
						text="Share Brain"
						variant="primary"
						startIcon={<ShareIcon />}></Button>
				</div>

				<div className="flex gap-4">
					<Card
						type="twitter"
						link="https://x.com/kirat_tw/status/1949929340256301366"
						title="First tweet"
					/>

					<Card
						type="youtube"
						title="First Video"
						link="https://www.youtube.com/watch?v=y-4CG-ptHq4"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
