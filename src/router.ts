import { createRouter, createWebHistory } from 'vue-router'
import { CartPage, ProductDetailPage, HomePage, CategoryPage } from '@/pages'
import routes from '@/shared/routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: routes.home.path,
            name: routes.home.name,
            component: HomePage
        },
        {
            path: routes.category.path,
            name: routes.category.name,
            component: CategoryPage
        },
        {
            path: routes.product.path,
            name: routes.product.name,
            component: ProductDetailPage
        },
        {
            path: routes.cart.path,
            name: routes.cart.name,
            component: CartPage
        }
    ]
})

export default router
