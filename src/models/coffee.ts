
export interface Coffee {
    id: string
    name: string
    roastLevel: RoastLevel
    origin?: string
    roastDate?: Date
    flavorNotes?: string[]
    user: string
}

export type RoastLevel = 'light' | 'medium' | 'dark' | 'espresso'
