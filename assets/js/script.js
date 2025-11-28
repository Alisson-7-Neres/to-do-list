let calendar;
document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events:
            [
 
            ]
    });

    calendar.render();
}
)

const btnEvent = document.getElementById('btnEvent');
const divTasks = document.getElementById('divTasks');
let ol = null;

btnEvent.addEventListener("click", function ()  {

    btnEvent.style.display = 'none';

    if(!ol) {
    ol = document.createElement('ol');
    divTasks.appendChild(ol);
    }
    // Criando <li><input type="text" placeholder="Título"></li> 
    const li1 = document.createElement('li');
    ol.appendChild(li1);

    const inputTitle = document.createElement('input');
    inputTitle.name = 'titulo';
    inputTitle.id = 'titulo';
    inputTitle.placeholder = 'Título';
    li1.appendChild(inputTitle);

    // Criando <li><input type="text" placeholder="Começo"></li> 
    const li2 = document.createElement('li');
    ol.appendChild(li2);
    const inputStart = document.createElement('input');
    inputStart.type = 'date';
    inputStart.name = 'comeco';
    inputStart.id = 'comeco';
    inputStart.placeholder = 'Começo';
    li2.appendChild(inputStart);

    // Criando <li><input type="text" placeholder="Fim"></li>
    const li3 = document.createElement('li');
    ol.appendChild(li3);
    const inputEnd = document.createElement('input');
    inputEnd.type = 'date'
    inputEnd.name = 'fim';
    inputEnd.id = 'fim';
    inputEnd.placeholder = 'Fim';
    li3.appendChild(inputEnd);

    // Criando button
    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Adicionar';
    button.id = 'btnAdd';
    button.addEventListener('click', adicionarTarefa);
    divTasks.appendChild(button);
    
});
function adicionarTarefa() {
    const titleValue = document.getElementById('titulo').value;
    const startValue = document.getElementById('comeco').value;
    const endValue = document.getElementById('fim').value;

    if(calendar) {
        calendar.addEvent({
            title: titleValue,
            start: startValue,
            end: endValue,

            allDay: true
        });

        document.getElementById('titulo').value = '';
        document.getElementById('comeco').value = '';
        document.getElementById('fim').value = '';

    } else {
        console.error('Calendário não está inicializando!');
    }

}