import {mobileMenuInit} from './parts/mobilemenu';
import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', () => {
    mobileMenuInit();
    new SimpleBar(document.getElementById('filterOut'));

    const cultureSelect = document.querySelector('#culture');
    const activeSubSelect = document.querySelector('#activeSub');
    const filterOutput = document.querySelector('#filterOut');
    document.querySelector('#filterSubmit').addEventListener('click', () => {
        const body = new FormData;
        body.append('culture', cultureSelect.value);
        body.append('activeSub', activeSubSelect.value);
        fetch(
            document.location.href,
            {method: "POST", headers: {"X-Requested-With": 'xmlhttprequest'},
            body
        })
        .then(res => res.text())
        .then(markup => filterOutput.innerHTML = markup);
    })
})