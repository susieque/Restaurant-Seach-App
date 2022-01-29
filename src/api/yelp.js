import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			"Bearer RnDLlQKqpII-d7ctM14ClrloPcQ3ZOgpi4pPnbEk1PdRsfEhkFdsQLJVQ8XwhrjS7fGRut3aq-746r6UBGofDmIG1in7LSHwMhf_D0vJxa7vDZMBIz0SxasIYevxYXYx",
	},
});
