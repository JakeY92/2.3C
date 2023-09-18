import { createRouter, createWebHistory } from 'vue-router';
import TextInterpolation from './components/TextInterpolation.vue';
import RawHTML from './components/RawHTML.vue';
import AttributeBindings from './components/AttributeBindings.vue';
import MethodsPage from './components/MethodsPage.vue';
import ReactivityFundamentals from './components/ReactivityFundamentals.vue';
import ComputedProperties from './components/ComputedProperties.vue';
import ClassAndStyleBindings from './components/ClassAndStyleBindings.vue';
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import FormInputBindings from './components/FormInputBindings.vue';
import WatchersPage from './components/WatchersPage.vue';
import ComponentsPage from './components/ComponentsPage.vue';

const routes = [
  { path: '/text-interpolation', component: TextInterpolation },
  { path: '/raw-html', component: RawHTML },
  { path: '/attribute-bindings', component: AttributeBindings },
  { path: '/methods', component: MethodsPage },
  { path: '/reactivity-fundamentals', component: ReactivityFundamentals },
  { path: '/computed-properties', component: ComputedProperties },
  { path: '/class-and-style-bindings', component: ClassAndStyleBindings },
  { path: '/list-rendering', component: ListRendering },
  { path: '/event-handling', component: EventHandling },
  { path: '/form-input-bindings', component: FormInputBindings },
  { path: '/watchers', component: WatchersPage },
  { path: '/components', component: ComponentsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
