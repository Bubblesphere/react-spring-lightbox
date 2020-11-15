import styled from 'styled-components';
import GalleryLightbox from '../components/GalleryLightbox';

export default () => (
    <Container>
        <GalleryLightbox
            galleryTitle="Dark Mode: OS Level Control In Your CSS"
            imageMasonryDirection="column"
            images={[
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',

                    caption: 'macOS Mojave Dark Mode Setting',
                    alt: 'macOS Mojave Dark Mode Setting',
                    width: 1200,
                    height: 1218
                },
                {
                    src:
                        'https://m.media-amazon.com/images/G/01/digital/music/merch/2019/LandingPages/katana/subtest/Katana_Aquisition_Desktop_1_1x.jpg',

                    placeholder:
                        'https://img.icons8.com/pastel-glyph/2x/search--v2.png',

                    caption: 'Windows 10 Dark Mode Setting',
                    alt: 'Windows 10 Dark Mode Setting',
                    width: 2848,
                    height: 2035
                },

                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
                    placeholder:
                        'https://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png',
                    caption: 'Android 9.0 Dark Mode Setting',
                    alt: 'Android 9.0 Dark Mode Setting',
                    width: 1280,
                    height: 600
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
                    caption: 'Windows 10 Dark Mode Setting#',
                    alt: 'Windows 10 Dark Mode Setting#',
                    width: 2848,
                    height: 2035
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
                    caption: 'Windows 10 Dark Mode Setting',
                    alt: 'Windows 10 Dark Mode Setting',
                    width: 2848,
                    height: 2035
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
                    caption: 'macOS Mojave Dark Mode Setting',
                    alt: 'macOS Mojave Dark Mode Setting',
                    width: 1200,
                    height: 1218
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
                    caption: 'Android 9.0 Dark Mode Setting',
                    alt: 'Android 9.0 Dark Mode Setting',
                    width: 1280,
                    height: 600
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
                    caption: 'Windows 10 Dark Mode Setting#',
                    alt: 'Windows 10 Dark Mode Setting#',
                    width: 2848,
                    height: 2035
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
                    caption: 'Android 9.0 Dark Mode Setting',
                    alt: 'Android 9.0 Dark Mode Setting',
                    width: 1280,
                    height: 600
                },
                {
                    src:
                        'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
                    caption: 'Windows 10 Dark Mode Setting#',
                    alt: 'Windows 10 Dark Mode Setting#',
                    width: 2848,
                    height: 2035
                }
            ]}
        />
    </Container>
);

const Container = styled.div`
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    background: #272727;
`;
