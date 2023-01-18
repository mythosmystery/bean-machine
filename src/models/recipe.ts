
export interface Recipe {
    id: string
    name: string
    user: string
    milkType: string
    milkAmount: number
    syrupType: string
    syrupAmount: string
    iced: boolean
    toppings: string[]
    coffeeRatio?: string
}