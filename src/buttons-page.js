const buttonsPage = () => {
    const buttons = document.createElement('div');

    buttons.classList.add('btnContainer');

    const btnText = ['Home', 'Menu', 'Contact'];

    for(let i=0; i<3; i++){
        const btn = document.createElement('button');

        btn.classList.add(`btn0${i}`);

        btn.textContent = btnText[i];

        buttons.append(btn);
    }

    return {buttons};
}

export default buttonsPage;