const cellSize = 20 
const size = 30

const life = {
    
   board: [],
   
   borderX: function(){
    return (paper.view.size.width - size * cellSize) / 2
   },
   
   borderY: function(){
    return (paper.view.size.height - size * cellSize) / 2
   },
   
   coords: function(i,j){
    return [this.borderX() + i*cellSize , this.borderY() + j*cellSize]
   },
   
   init: function(){
    for(i = 0 ; i< size ; i++){
        this.board[i]=[];
        for(j = 0 ; j< size ; j++)
            this.board[i][j]= new Cell(i,j);
    }
   },
   
   saveState: function(){
    for(i = 0 ; i< size ; i++){
        for(j = 0 ; j< size ; j++)
        this.board[i][j].setPreviousState(this.board[i][j].getState()) ;
    }
   },
   
   getPreviousState: function(i,j){
        if(i< size && j<size && i >= 0 && j >= 0){
            if(this.board[i][j].getState() === 0 || this.board[i][j].getState() === 1 )
            console.log(this.board[i][j].getState());
            return this.board[i][j].getPreviousState();
        }
        else return 0;
   },

   iterate: function(){
    this.saveState();
    for(i = 0 ; i< size ; i++){
        for(j = 0 ; j< size ; j++){
            let v1 = (i-1)%size , v2 = (i-2)%size, v3 = (i+1)%size;
            let h1 = (j-1)%size , h2 = (j-2)%size, h3 = (j+1)%size;
            if(this.getPreviousState(i,j) === 1){
                    if(this.getPreviousState(v1,j)&&this.getPreviousState(v1,h1)&&this.getPreviousState(i,h1) === 1)
                        this.board[i][j].live();
                    else if(this.getPreviousState(v3,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h3) === 1)
                        this.board[i][j].live();
                    else if(this.getPreviousState(v1,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h3) === 1)
                        this.board[i][j].live();
                    else if(this.getPreviousState(v3,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h1) === 1)
                        this.board[i][j].live();
                    else this.board[i][j].die();
                    
            }
            else if(this.getPreviousState(i,j) === 0){
                if(this.getPreviousState(v1,j)&&this.getPreviousState(v1,h1)&&this.getPreviousState(i,h1) === 1)
                        this.board[i][j].die();
                    else if(this.getPreviousState(v3,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h3) === 1)
                        this.board[i][j].die();
                    else if(this.getPreviousState(v1,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h3) === 1)
                        this.board[i][j].die();
                    else if(this.getPreviousState(v3,j)&&this.getPreviousState(v3,h3)&&this.getPreviousState(i,h1) === 1)
                        this.board[i][j].live();
            }
            
        }
    }
   }

}

class Cell {

    #i ;
    #j ;
    #state;
    #previousState = 0;
    #shape ;

    constructor(i,j){
        this.#i = i;
        this.#j = j;
        this.#shape = paper.Path.Circle({
            center: life.coords(i,j),
            radius: cellSize/2,
            fillColor: 'white',
            strokeColor: 'blue'});
    }

    getI(){
        return this.#i;
    }

    getJ(){
        return this.#j;
    }

    getState(){
        return this.#state;
    }

    setState(state){
        this.#state = state;
    }

    getPreviousState(){
        return this.#previousState;
    }

    setPreviousState(previousState){
        this.#previousState = previousState;
    }

    getShape(){
        return this.i;
    }

    setShape(shape){
        return this.#shape =  shape;
    }

    live() {
        this.#state =  1 ;
        this.#shape.fillColor = 'cyan';
    }

    die(){
        this.#state =  0 ;
        this.#shape.fillColor = 'white';   
    }

}
function onKeyUp(event){
    // A Compléter
    if (event.key =='g') {
        console.log("Step");
        life.iterate();
    }
}

// function onFrame(){
//     life.iterate();
// }

window.addEventListener("keyup",onKeyUp);

window.addEventListener("load",
    function(){
        let canvas = document.getElementById("myCanvas")
        paper.setup(canvas)
        // Placer le code à exécuter ici pour qu'il le soit une fois la page 
        // chargée dans son intégralité
        life.init();

       // paper.view.setOnFrame(onFrame);
        
        /* life.board[5][4].live();
        life.board[5][5].live();
        life.board[5][6].live(); */

        life.board[5][4].live();
        life.board[5][5].live();
        life.board[5][6].live();
        life.board[5][7].live();
        life.board[5][8].live();

        life.board[9][4].live();
        life.board[9][5].live();
        life.board[9][6].live();
        life.board[9][7].live();
        life.board[9][8].live();

        life.board[7][8].live();
        life.board[7][4].live();
        
    }
)