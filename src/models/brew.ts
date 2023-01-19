import type { Coffee } from './coffee'
import type { User } from './user'

export interface Brew {
    id: string
    dose: number
    user: string
    coffee: string
    grindSetting?: string
    time: number
    pressure: number
    yield: number
    temperature: number
    notes?: string
    filterType?: string
    preInfusion?: boolean
    bloom?: boolean
    rating?: number
    expand?: {
        user?: User,
        coffee?: Coffee
    }
}