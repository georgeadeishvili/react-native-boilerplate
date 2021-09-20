export const delay = (second: number = 0.1) =>
	new Promise(resolve => setTimeout(() => resolve(true), second * 1000))
