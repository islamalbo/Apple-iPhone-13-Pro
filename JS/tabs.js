const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const tabsPageTitle = document.querySelector('title');
    
    const tabOptions = [{
            name: "Graphite",
            memory: '128',
            price: '99990',
            image: 'img/iPhone-graphite.webp',
            title: 'Apple iPhone 13 Pro Graphite 128GB'
        },
        {
            name: "Silver",
            memory: '256',
            price: '110000',
            image: 'img/iPhone-silver.webp',
            title: 'Apple iPhone 13 Pro Silver 256GB'
        },
        {
            name: "Sierra Blue",
            memory: '512',
            price: '125000',
            image: 'img/iPhone-sierra_blue.webp',
            title: 'Apple iPhone 13 Pro Sierra Blue 256GB'
        }
    ];

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory} ${tabOptions[index].name}`;
        tabsPrice.textContent = `${tabOptions[index].price}₽`;
        tabsImage.setAttribute('src', tabOptions[index].image);
        tabsPageTitle.textContent = `${tabOptions[index].title}`;
    };

    const changeTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClickedTab) {
                tab.classList.add('active');
            }

        });
        changeContent(indexClickedTab);
    };


    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeTabs(index);
        });
    });
};

tabsFunc();