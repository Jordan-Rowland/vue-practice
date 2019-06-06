/*jshint esversion:7*/
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/user/Header.vue';

export const routes = [
  { path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header,
    }
  },
  { path: '/user',
    components: {
      default: User,
      'header-bottom': Header,
    },
    children: [
  // Adding an empty route to the 'UserStart' component
  // sets it as the default in a 'router-view' component
      { path: '',
        component: UserStart
      },
      { path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('Inside UserDetail beforeEnter');
          next();
        }
      },
      { path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      },
    ]
  },
  { path: '*',
  redirect: { name: 'home' }
  }
];
