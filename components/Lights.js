import React from 'react';
import {
    AppRegistry,
    View,
    AmbientLight,
    PointLight,
} from 'react-360';
export default class Lights extends React.Component{
    render(){
        return(
            <View>
                 <AmbientLight intensity={0.9}
                 style={{
                    color:'white',
                    transform:[
                      {translate:[0,0,0]},
                    ]
                  }}
                 />
        
                  
                  <PointLight intensity={0.8}
                  style={{
                    color: '#F5F5DC',
                    transform:[
                      {translate: [0,0,0]},
                    ]
                  }}
                  distance={10}

                  />
        </View>

        );
    }
};