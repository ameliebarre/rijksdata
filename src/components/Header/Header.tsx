import { FaRegHeart as FavoriteIconOutline } from 'react-icons/fa';

import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>Rijks!</h1>
			<nav className='header__nav'>
				<FavoriteIconOutline className='header__nav-icon' size={20} />
			</nav>
		</header>
	);
};

export default Header;
