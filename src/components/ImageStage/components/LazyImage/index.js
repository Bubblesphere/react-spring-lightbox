import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({shouldFullyInitiate, shouldPartiallyInitiate, renderChildren, renderOverlay, src, placeholder}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [initLoadingImage, setInitLoadingImage] = useState(false);
    const [placeholderImageLoaded, setPlaceholderImageLoaded] = useState(false);
    const [initLoadingPlaceholderImage, setInitLoadingPlaceholderImage] = useState(false);
    const [hasError, setHasError] = React.useState(false);

    useEffect(() => {
        if ((shouldPartiallyInitiate || shouldFullyInitiate) && !initLoadingPlaceholderImage) {
            if (placeholder !== undefined) {
                const img = document.createElement('img');

                img.onload = () =>  {
                    setPlaceholderImageLoaded(true);
                }
                img.onerror = () => setHasError(true);

                img.src = placeholder;
            }

            setInitLoadingPlaceholderImage(true);
        }
    }, [shouldFullyInitiate, shouldPartiallyInitiate]);

    useEffect(() => {
        if (shouldFullyInitiate && !initLoadingImage) {
            const img = document.createElement('img');

            img.onload = () => setImageLoaded(true);
            img.onerror = () => setHasError(true);

            img.src = src;

            setInitLoadingImage(true);
        }
    }, [shouldFullyInitiate]);

    if (shouldPartiallyInitiate || shouldFullyInitiate) {
        if (imageLoaded) {
            return renderChildren(src);
        }

        if (placeholderImageLoaded) {
            return (
                <>
                    {renderOverlay && renderOverlay()}
                    {renderChildren(placeholder)}
                </>
            );
        } 

        return renderOverlay && renderOverlay();
    }

    return null;
};

LazyImage.propTypes = {
    /* Whether the image should be initiated */ 
    shouldFullyInitiate: PropTypes.bool,
    shouldPartiallyInitiate: PropTypes.bool,
    renderChildren: PropTypes.func.isRequired, 
    renderOverlay: PropTypes.func, 
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default LazyImage;