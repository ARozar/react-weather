

export async function getAll(){
    const characters = await fetch('api/characters')
    .then(res => res.json());
    
    return characters;

}

export async function getById(){
    const charaters = await fetch();
}