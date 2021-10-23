import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
	return (
		<FeatureContainer>
			<h1>Genetica del Mes</h1>
			<p>
				La Purple Haze es un cultivo de origen incierto. Su nombre
				apareció en los años 60 y 70, época en que las cápsulas de LSD
				púrpuras, también llamadas Purple Haze, se vendían a raudales.
				La potente flor se ganó el nombre gracias a sus capullos de
				color violeta y a su densidad de tricomas.
			</p>
			<FeatureButton>Hace tu pedido</FeatureButton>
		</FeatureContainer>
	);
};

export default Feature;
