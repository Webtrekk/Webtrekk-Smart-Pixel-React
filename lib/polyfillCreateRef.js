import React from 'react';

// polyfill for react v15
export const createRef = React.createRef || function() {
    function getRef(refObject) {
        if (!refObject) {
            return null;
        }

        let ref = refObject;

        if (Object.keys(ref).length === 1) {
            if (ref.hasOwnProperty('current')) {
                ref = ref.current;
            }
            else if (ref.hasOwnProperty('value')) {
                ref = ref.value;
            }
        }

        return ref;
    }

    function ref(instanceOrNode) {
        ref.current = getRef(instanceOrNode) || null;
    }

    ref.current = null;

    return ref;
};

export default {
    // polyfill for react v15
    createRef
};
