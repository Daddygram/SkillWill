const gela = document.createElement('div');
gela.id = 'card';

const h2 = document.createElement('h2');
h2.textContent = 'Gandalf';

const link = document.createElement('a');
link.href = '#';
link.textContent = 'Go to profile';

gela.appendChild(h2);
gela.appendChild(link);

document.body.appendChild(gela);