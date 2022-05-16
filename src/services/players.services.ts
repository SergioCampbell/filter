
const getAllPlayers = async () => {
        const API = 'https://mach-eight.uc.r.appspot.com'    
        try {
            fetch(API)
            .then(response => response.json())
            .then(data => console.log(data.values))
        } catch (error) {
            alert('There are something bad here: ' +error)
        }
}

export const algo = () => {
    return getAllPlayers()
}