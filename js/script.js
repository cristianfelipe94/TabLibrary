function tab(selector) {


    let elements = document.querySelectorAll(selector);

    for (let element of elements) {

        let links = element.querySelectorAll('ul > li > a');

        for (link of links) {

            link.addEventListener('click', function change(e) {

                let tabsOption = e.target.getAttribute('href');
                let tabsContent = element.querySelector(tabsOption);
                clear();
                tabsContent.className = 'mostar'

            });

            function clear() {
                for (let tabs of links) {
                    tabs.className = '';
                }
                for (let item of listItem) {
                    item.className = '';
                }
            }
            let listItem = element.querySelectorAll('div');
            listItem[0].className = 'mostar';
        }
    }
}
