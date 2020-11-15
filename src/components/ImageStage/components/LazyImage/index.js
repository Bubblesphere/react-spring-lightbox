import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({shouldInitiate, renderChildren, renderPlaceholder, src, placeholder}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [initLoadingImage, setInitLoadingImage] = useState(false);
    const [placeholderImageLoaded, setPlaceholderImageLoaded] = useState(false);
    const [initLoadingPlaceholderImage, setInitLoadingPlaceholderImage] = useState(false);
    const [hasError, setHasError] = React.useState(false);

    useEffect(() => {
        if (shouldInitiate && !initLoadingPlaceholderImage) {
            if (placeholder !== undefined) {
                const img = document.createElement('img');

                img.onload = () =>  setPlaceholderImageLoaded(true);
                img.onerror = () => setHasError(true);

                img.src = placeholder;
            }

            setInitLoadingPlaceholderImage(true);
        }
    }, [shouldInitiate]);

    useEffect(() => {
        if (shouldInitiate && !initLoadingImage) {
            const img = document.createElement('img');

            img.onload = () => setImageLoaded(true);
            img.onerror = () => setHasError(true);

            img.src = src;

            setInitLoadingImage(true);
        }
    }, [shouldInitiate]);

    if (shouldInitiate) {
        if (imageLoaded) {
            return renderChildren(src);
        }

        if (placeholderImageLoaded) {
            return (
                <>
                    {renderPlaceholder()}
                    {renderChildren(placeholder)}
                </>
            );
        } 

        return renderPlaceholder();
    }

    return null;
};

LazyImage.propTypes = {
    /* Whether the image should be initiated */ 
    shouldInitiate: PropTypes.bool.isRequired,
    renderChildren: PropTypes.func.isRequired, 
    renderPlaceholder: PropTypes.func.isRequired, 
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default LazyImage;