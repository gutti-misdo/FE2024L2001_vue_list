new Vue({
  el: '#app',
  data() {
    return {
      menus: [{
        label: 'TOP',
        psth: './index.html'
      },{
        label: 'ABOUT',
        path: './about.html'
      },{
        label: 'SCHEDULE',
        path: './contact.html'
      }]
    };
  }
});