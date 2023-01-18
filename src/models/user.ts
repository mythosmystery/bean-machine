
export interface User {
    id: string
    username: string
    email: string
    name: string
    bio: string
    brews: string[]
    recipes: string[]
    coffees: string[]
    avatar?: string
    twitter?: string
    facebook?: string
    website?: string
    youtube?: string
}