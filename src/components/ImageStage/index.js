/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImagePager from './components/ImagePager';

/**
 * Containing element for ImagePager and prev/next button controls
 *
 * @param {array} images Array of image objects to be shown in Lightbox
 * @param {number} currentIndex Index of image in images array that is currently shown
 * @param {function} onPrev True if this image is currently shown in pager, otherwise false
 * @param {function} onNext Function that can be called to disable dragging in the pager
 * @param {function} renderPrevButton A React component that is used for previous button in image pager
 * @param {function} renderNextButton A React component that is used for next button in image pager
 * @param {function} renderImageOverlay A React component that renders inside the image stage, useful for making overlays over the image
 * @param {boolean} singleClickToZoom Overrides the default behavior of double clicking causing an image zoom to a single click
 */
const ImageStage = ({
    images,
    currentIndex,
    onPrev,
    onNext,
    onClose,
    renderPrevButton,
    renderNextButton,
    renderImageOverlay,
    singleClickToZoom,
    lazyLoad,
    renderLazyLoadOverlay
}) => {
    // Extra sanity check that the next/prev image exists before moving to it
    const canPrev = currentIndex > 0;
    const canNext = currentIndex + 1 < images.length;

    return (
        <ImageStageContainer className="lightbox-image-stage">
            {renderPrevButton({ canPrev })}
            <ImagePager
                images={images}
                currentIndex={currentIndex}
                onClose={onClose}
                onNext={onNext}
                onPrev={onPrev}
                renderImageOverlay={renderImageOverlay}
                singleClickToZoom={singleClickToZoom}
                lazyLoad={lazyLoad}
            />
            {renderNextButton({ canNext })}
        </ImageStageContainer>
    );
};
ImageStage.propTypes = {
    onClose: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
            caption: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            width: PropTypes.number,
            height: PropTypes.number
        })
    ).isRequired,
    renderPrevButton: PropTypes.func.isRequired,
    renderNextButton: PropTypes.func.isRequired,
    renderImageOverlay: PropTypes.func.isRequired,
    singleClickToZoom: PropTypes.isRequired,
    lazyLoad: PropTypes.shape({
        /* The source URL of this image */
        renderOverlay: PropTypes.func,
        /* The alt attribute for this image */
        fullyInitiateIndices: PropTypes.arrayOf(PropTypes.number),
        partiallyInitiateIndices: PropTypes.arrayOf(PropTypes.number)
    })
};

export default ImageStage;

const ImageStageContainer = styled.div`
    flex-grow: 1;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
