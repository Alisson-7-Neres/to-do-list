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
    carregarEventos();
}
)

const btnEvent = document.getElementById('btnEvent');
const divTasks = document.getElementById('divTasks');
const button = document.getElementById('btnAdd');
let ol = null;

btnEvent.addEventListener("click", function () {

    btnEvent.style.display = 'none';
    divTasks.style.display = 'block';
    button.addEventListener('click', adicionarTarefa);

    adicionarTarefa();

});

function adicionarTarefa() {
    const titleValue = document.getElementById('titulo').value;
    const startValue = document.getElementById('comeco').value;
    const endValue = document.getElementById('fim').value;
    
    const evento = {
        title: titleValue,
        start: startValue,
        end: endValue
    };

    if (calendar) {
        calendar.addEvent({
            title: titleValue,
            start: startValue,
            end: endValue,
            evento,
            allDay: true
        });


        salvar(evento);
        mostrarTarefas(titleValue, startValue, endValue);

        document.getElementById('titulo').value = '';
        document.getElementById('comeco').value = '';
        document.getElementById('fim').value = '';


    } else {
        console.error('Calendário não está inicializando!');
    }
}

function mostrarTarefas(titulo, comeco, fim) {

    if (titulo != '' && comeco != '' && fim != '') {


        const tbody = document.getElementById('tbodyTarefas');
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${titulo}</td>
        <td>${formatarData(comeco)}</td>
        <td>${formatarData(fim)}</td>
    `;
        tbody.appendChild(tr);
    }
}

function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

// Salvando no localstorage
function salvar(evento) {
    let eventos = JSON.parse(localStorage.getItem('events')) || [];
    eventos.push(evento);
    localStorage.setItem('events', JSON.stringify(eventos));
}

function carregarEventos() {
    const eventosSalvos = JSON.parse(localStorage.getItem('events')) || [];

    eventosSalvos.forEach(evento => {
        calendar.addEvent(evento);
        mostrarTarefas(evento.title, evento.start, evento.end);
    });
}

