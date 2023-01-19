import type { Brew } from './brew'
import type { User } from './user'

export interface Recipe {
    id: string
    name: string
    brew: string
    user: string
    milkType: string
    milkAmount: number
    syrupType: string
    syrupAmount: string
    iced: boolean
    toppings: string[]
    coffeeRatio?: string
    rating?: number
    notes?: string
    expand?: {
        user?: User
        brew?: Brew
    }
}