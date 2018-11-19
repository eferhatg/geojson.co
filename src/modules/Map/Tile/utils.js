export const getSelectedTileDetails=(selectedTile,tileProviders)=>{
    for(let i=0; i<tileProviders.length; i++){
        if(tileProviders[i].code===selectedTile){
            return tileProviders[i]
        }
      
    }

    return {}
}