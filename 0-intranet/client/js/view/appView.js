// import { ProjectTaskView } from './projectTask'

// const { View } = Backbone;

// const milestone = {
//     id: 1,
//     name_id: 'Master',
//     title: 'Погодный сайт',
//     description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
//     start: (new Date()),
//     finish: (new Date()),
//     viewtype: 1,
//     tasks: [{
//         name_id: 'GIS-2',
//         title: 'Инициация',
//         url: 'project/PY/milestone/1',
//         status: 1
//     }, {
//         name_id: 'GIS-3',
//         title: 'Планирование',
//         url: 'project/PY/milestone/1',
//         status: 2
//     }, {
//         name_id: 'GIS-4',
//         title: 'Исполнение',
//         url: 'project/PY/milestone/1',
//         status: 3
//     }, {
//         name_id: 'GIS-5',
//         title: 'Мониторинг и упраавление',
//         url: 'project/PY/milestone/1',
//         status: 4
//     }, {
//         name_id: 'GIS-6',
//         title: 'Завершение',
//         url: 'project/PY/milestone/1',
//         status: 5
//     }]
// };


// class ProjectTasksView extends View {
//     constructor(template) {
//         super();
//         this.el = $('#tasks');
//         this.events = {
//             'click .js_task_header': 'openTask'
//         };
//         this.template = template;
//         this.render();
//         View.apply(this);
//     }

//     render() {
//         this.el.html(this.template(milestone));
//     }

//     toggleTask(task) {
//         if (task.classList.contains('open')) {
//             $('.js_task_header').removeClass('open');
//             $(task).removeClass('open');
//         } else {
//             $('.js_task_header').removeClass('open');
//             $(task).addClass('open');
//         }
//     }

//     openTask(e) {
//         let opentaskBlock = $(e.currentTarget.nextElementSibling);
//         let ready = opentaskBlock.data('task-ready');
//         if (!ready){
//             let opentask = new ProjectTaskView();
//             $(opentaskBlock).html(opentask.render().el);
//             opentaskBlock.data('task-ready', true);
//             this.toggleTask(e.currentTarget);
//         } else {
//             this.toggleTask(e.currentTarget);
//         }
//     }
// }

// export { ProjectTasksView }