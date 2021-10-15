import { startLoading } from '@utils/loader'

export const useContainer = () => {
	const loader = () => {
		startLoading()
	}

	return {
		loader
	}
}
