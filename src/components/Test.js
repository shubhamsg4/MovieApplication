import React from 'react';
import axios from 'axios';
const values={
    id:'1',
    count:'5'
}
const config={
    headers:{
        'Content-Type':'application/json'
    }
}
export  class Test extends React.Component{
    state={
        movies:[],
    }
    
 
    componentDidMount(){
        try{
        console.log("did mount");
     axios.get('https://aqueous-anchorage-34255.herokuapp.com/api/movievalue',values,config).then(res =>{
        //console.log(res.data.data); 
      this.setState({movies:res.data.data})
    
     
      
    });
    }
    catch(err)
    {
       console.log(err); 
    }
}

    render() {
    return <ul>{this.state.movies.map(movie=><li key={movie.movieId}>{movie.title}</li>)}
    </ul>;
    }
}

