function QueryTestParameters(name: string, width: number, height: number) {
	if (name.trim() != '' && width && height && width >= 40 && height >= 40)
		return true;
	return false;
}

export default QueryTestParameters;
