import React, { Suspense } from 'react';
import Preloader from '../comoinents/common/Preloader';

export const withSuspence = (Components) => {

    return (props) => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Components {...props} />
            </React.Suspense >
        )
    }
}