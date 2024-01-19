interface InventoryProps {
	categories: {
		value: number;
		heading: string;
	}[];
}

const Inventory = ({ categories }: InventoryProps) => {
	return (
		<>
			{categories.map((item) => (
				<div
					key={item.heading}
					className=" w-full my-2   text-gray-500 place-items-center gap-4 grid grid-cols-8 p-3"
				>
					<div className=" col-span-2">
						<h5 className="text-xs tracking-wide">
							{item.heading.toUpperCase()}
						</h5>
					</div>

					{/* bar */}
					<div className="w-full col-span-4 px-2">
						<div className=" w-full relative  overflow-hidden   h-2  bg-gray-100 rounded-lg ">
							<div
								className="  h-full absolute"
								style={{
									width: `${item.value}%`,
									backgroundColor: `hsl(${item.value * 4}, 50%, 60%)`,
									transition: `width 1s ease-in-out`,
								}}
							></div>
						</div>
					</div>

					<div className="col-span-2">
						<span className="text-xs tracking-wide">{item.value}%</span>
					</div>
				</div>
			))}
		</>
	);
};

export default Inventory;
