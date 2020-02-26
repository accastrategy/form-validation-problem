import React, { Suspense, lazy } from 'react';

let MainComponent;

class Stage extends React.Component {
    constructor(props) {
        super(props);

        const { isMobile } = props.configuration;
        if (isMobile) {
            // MainComponent = lazy(() => import(/* webpackChunkName: 'Mobile' */ './mobile'));
        } else {
            MainComponent = lazy(() => import(/* webpackChunkName: 'Desktop' */ './desktop'));
        }
    }

    render() {
        return (
            <div>
                <Suspense fallback={<div />}>
                    <MainComponent />
                </Suspense>
            </div>
        );
    }
}

export default Stage;
