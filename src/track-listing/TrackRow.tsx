import React, {FC} from 'react';

interface Props {
	id: number;
	index: number;
}

const TrackRow: FC<Readonly<Props>> = p => {
	return (
		<div>{p.id}</div>
	);
};

export default TrackRow;
