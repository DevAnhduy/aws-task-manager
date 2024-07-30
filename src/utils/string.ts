export const extractFilenameFromS3Url = (url: string): string => {
	// eslint-disable-next-line no-useless-escape
	const regex = /[^\/]+(?=\?|$)/;

	const match = url.match(regex);

	console.log('match', match);

	return match ? match[0]?.split('?')?.[0] : '';
};
