import { Player } from '@lottiefiles/react-lottie-player';

export default function Lottie() { 

    return (
        <div>
            <Player
                src='lotties/logomijail.json'
                className='player'  
                autoplay                                      
                debug
                speed={1}            
            />            

        </div>
        
        
    )
}