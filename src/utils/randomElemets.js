export const randomElements=(arr,elements)=>{
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,elements)
}