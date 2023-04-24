export interface IPokemon{
    count: string
    next: string
    previous: string
    results: IDataPokemon[]
}

export interface IDataPokemon{
    name: string
    url: string
}