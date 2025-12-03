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

        mostrarTarefas();

    } else {
        console.error('Calendário não está inicializando!');
    }

}

