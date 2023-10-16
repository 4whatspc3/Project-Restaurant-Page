const homePage = () => {
    const home = document.createElement('div');

    home.classList.add('homeContainer');
    
    const homeContent = document.createElement('p');

    homeContent.textContent = "Best coffee shop ever!";

    const restaurantReview = document.createElement('p');

    restaurantReview.textContent =  `All Sort of coffee and more! Bring your family, friends and neighbors!`;

    home.append(homeContent, restaurantReview);

    return {home};
}

export default homePage;