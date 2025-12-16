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

    if (calendar) {
        calendar.addEvent({
            title: titleValue,
            start: startValue,
            end: endValue,

            allDay: true
        });

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

        /*
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = titulo;
    
        const tdComeco = document.createElement('td');
        tdComeco.textContent = comeco;
    
        const tdFim = document.createElement('td');
        tdFim.textContent = fim;
    
        tr.appendChild(tdTitulo);
        tr.appendChild(tdComeco);
        tr.appendChild(tdFim);
        */

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

