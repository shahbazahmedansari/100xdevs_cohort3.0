import CrossIcon from '../icons/CrossIcon';
import Button from './Button';
import Input from './Input';

// controlled component
const CreateContentModal = ({ open, onClose }) => {
	return (
		<div>
			{open && (
				<div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
					<div className="flex flex-col justify-center">
						<span className="bg-white opacity-100 p-4 rounded-md">
							<div className="flex justify-end">
								<div onClick={onClose}>
									<CrossIcon />
								</div>
							</div>
							<div className="flex flex-col gap-5 mt-3">
								<Input
									type="text"
									className=""
									placeholder="Enter Title"
									onChange={() => {}}
								/>
								<Input
									type="text"
									className=""
									placeholder="Enter Link"
									onChange={() => {}}
								/>
							</div>
							<div className="flex justify-center my-3">
								<Button
									text="Submit"
									variant="secondary"></Button>
							</div>
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateContentModal;
