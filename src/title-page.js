const titlePage = () => {
    const title = document.createElement('div');

    title.classList.add('titleContainer');

    const titleContent = document.createElement('p');

    titleContent.textContent = "That's Why Café!";

    title.append(titleContent);

    return {title};
}

export default titlePage;