import { Loader } from '@components'
import references from './references'

/**
 * Save loader ref.
 */
export const saveLoaderRef = (ref: Loader) => {
	references.loader = ref
}

/**
 * Start loader spinning on the screen.
 */
export const startLoading = () => {
	references.loader?.start()
}

/**
 * Stop loader spinning on the screen.
 */
export const stopLoading = () => {
	references.loader?.stop()
}
