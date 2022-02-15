let submits = [];
const addSearch = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let search = {
        genre: document.getElementById('genre').value,
        forfatter: document.getElementById('forfatter').value,
        årstal: document.getElementById('årstal').value

    }
    submits.push(search);
    document.forms[0].reset(); // clear form

    console.warn('added', { submits });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(submits, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(submits));
}
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Submitbtn').addEventListener('click', addSearch);
});

