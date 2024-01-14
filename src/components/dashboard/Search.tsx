import {BsSearch} from "react-icons/bs";
import {FaRegBell} from "react-icons/fa";
import userImage from "../../assets/user.png";
const Search = () => {
	return (
		<header className=" border-x-0 border p-4">
			<div className="flex h-6 justify-between items-center">
				<BsSearch />
				<input
					className="w-full opacity-65 text-gray-600 tracking-wider outline-0 p-2 bg-inherit"
					type="text"
					placeholder="Search for data, docs"
				/>
				<div className="flex items-center gap-2 text-xl">
					<FaRegBell />
					<img src={userImage} alt="User" height={35} width={35} />
				</div>
			</div>
		</header>
	);
};

export default Search;
