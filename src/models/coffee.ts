import type { User } from './user'

export interface Coffee {
    id: string
    name: string
    roastLevel: RoastLevel
    origin?: string
    roastDate?: Date
    flavorNotes?: string[]
    user: string
    rating?: number
    notes?: string
    expand?: {
        user?: User
    }
}

export type RoastLevel = 'light' | 'medium' | 'dark' | 'espresso'
