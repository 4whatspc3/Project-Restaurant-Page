import homeImage from './images/waitress.jpg';

const homePage = () => {
    const home = document.createElement('div');

    home.classList.add('homeContainer');
    
    const homeContent = document.createElement('p');

    homeContent.textContent = "Best coffee shop ever!";

    const image = document.createElement('img');

    image.setAttribute('src', homeImage);

    const restaurantReview = document.createElement('p');

    restaurantReview.textContent =  `All Sort of coffee and more! Bring your family, friends and neighbors!`;

    home.append(homeContent, image, restaurantReview);

    return {home};
}

export default homePage;