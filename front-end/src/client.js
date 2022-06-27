import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'vjozlejh',
    dataset: 'production',
    apiVersion: '2022-06-27',
    useCdn: true,
    token: 'skJ6MYD1UplFXGImefWwcdfNZOcy2gfPFYXlwqQHBu8fE26N6aBrNLhjmUcKPiVqxDuo68ihREwHkSsMbZIFuwZSAc8erXRFMwPRx5vMDC45IKYCNYKkDgUPwPtVMughRidE4RqNKLH3uF6UYSE0qRCN1G9lGTl7YsgS20dimohfjavk62BK',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);