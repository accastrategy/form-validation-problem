import React from 'react';
import { render } from 'react-dom';

import Stage from './components/Stage';
import Configuration from './configuration';

import ResourceLoader from './utils/ResourceLoader';

const configuration = new Configuration({});

const language = 'en';
const isMobile = false;

ResourceLoader.loadCSS(language, isMobile).then(() => {
    const root = document.getElementById('root');

    render((
        <Stage configuration={configuration} />
    ), root);
});
