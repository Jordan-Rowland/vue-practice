/*jshint esversion:7*/
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
  // Adding an empty route to the 'UserStart' component
  // sets it as the default in a 'router-view' component
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail },
    { path: ':id/edit', component: UserEdit },
  ] },
];
