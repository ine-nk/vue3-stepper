// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      isEnd: false,
      iSDisbledBAck: true,
      steps: [
        {
          title: "Основы",
          text:
            "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
          classDone: false,
          isActive: false,
        },
        {
          title: "Компоненты",
          text:
            "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
          classDone: false,
          isActive: false,
        },
        {
          title: "Роутер",
          text:
            "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
          classDone: false,
          isActive: false,
        },
        {
          title: "Vuex",
          text:
            "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
          classDone: false,
          isActive: false,
        },
        {
          title: "Composition",
          text:
            "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
          classDone: false,
          isActive: false,
        },
      ],
    };
  },
  methods: {
    init() {
      this.activeIndex = 0;
      this.iSDisbledBAck = true;
      this.isEnd = false;
      for (let i = 0; i < this.steps.length; i++) {
        this.steps[i].isActive = false;
        this.steps[i].classDone = false;
      }
      this.steps[this.activeIndex].isActive = true;
    },
    prev() {
      // когда нажимаем кнопку назад
      //  тот эл-т на котором были установить класс done
      // на первом шаге кнопка назад не активна
      if (this.activeIndex !== 0) {
        this.steps[this.activeIndex].classDone = true;
        this.steps[this.activeIndex].isActive = false;

        this.activeIndex--;
        this.steps[this.activeIndex].isActive = true;
      } else {
        this.activeIndex = 0;
        this.iSDisbledBAck = true;
        console.log(" мы в начале пути", this.activeIndex);
      }
    },

    reset() {
      // после кнопки  - появляется : начать заново -
      console.log("Делаем сброс состояния");
      this.init();
    },

    nextOfFinish(activeIndex, idx) {
      // кнопка вперед  - переключает на след шаг   - след индикатор шага  становится активной  - предыдущий становится "done"  и  активируется кнопка "шаг назад"
      // кнопка вперед или закончить  - если  последний шаг активен то кнопка вреред меняется на законцить
      // после нажатия на закончить - меняется на кнопку начать заново
      // после нажатия начть заново  устананвливается на первый шаг - активно  и появляются кнопки назад и вперед -
      this.iSDisbledBAck = false;
      if (this.activeIndex < this.steps.length - 1) {
        let n = this.activeIndex;
        this.steps[n].classDone = true;
        this.steps[n].isActive = false;
        this.activeIndex++;
        this.steps[n + 1].isActive = true;
      } else {
        this.activeIndex = this.steps.length - 1;
        console.log("мы на последнем шаге");
      }
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      // установить класс active - все предыдушие - класс done
      // на первом шаге кнопка назад неактивна
      this.iSDisbledBAck = false;
      this.steps[this.activeIndex].classDone = true;
      this.steps[this.activeIndex].isActive = false;

      this.activeIndex = idx;
      this.steps[this.activeIndex].isActive = true;
    },
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  },
  watch: {},
};

Vue.createApp(App).mount("#app");
