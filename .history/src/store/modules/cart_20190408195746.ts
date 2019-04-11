import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import store from '~/store';
import { Product, Cart } from '@/store/interfaces';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'cart',
    store,
})
class CartModule extends VuexModule implements Cart {
    products: Product[] = [];
}

export default getModule(CartModule);
