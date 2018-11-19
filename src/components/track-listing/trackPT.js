import PropTypes from 'prop-types';

/**
 * PropTypes descriptor for a track object.
 */
const trackPT = PropTypes.shape({
	title: PropTypes.string,
	note: PropTypes.string,
	writer: PropTypes.string,
	lyrics: PropTypes.string,
	music: PropTypes.string,
	duration: PropTypes.string
});

export default trackPT;
