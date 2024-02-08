import { useQuery } from '@tanstack/react-query';
import { GET } from '../../api/apiHelpers';

const API_KEY = import.meta.env.VITE_API_KEY;

const HomeGallery = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['collection'],
		queryFn: () => GET({ url: `/collection?key=${API_KEY}` }),
	});

	console.log('DATA : ', data);

	return <div>Home Gallery</div>;
};

export default HomeGallery;
