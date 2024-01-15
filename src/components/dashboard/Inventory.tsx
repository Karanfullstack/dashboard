interface InventoryProps {
	categories: {
		value: number;
		heading: string;
	}[];
}

const Inventory = ({categories}: InventoryProps) => {
	return (
		<>
			{categories.map((item) => (
				<div
					key={item.heading}
					className=" w-full my-2 font-[700] text-gray-500 place-items-center gap-3 grid grid-cols-8 p-2"
				>
					<div className=" col-span-2">
						<h5 className="text-xs tracking-wide">
							{item.heading.toUpperCase()}
						</h5>
					</div>

					{/* bar */}
					<div className="w-full col-span-4 px-1">
						<div className=" w-full relative  overflow-hidden   h-3  bg-gray-100 rounded-lg border">
							<div
								className=" bg-red-400 h-full absolute"
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
