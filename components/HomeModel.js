import React from 'react';
import {
    AppRegistry,
    View,
    asset,
} from 'react-360';
import Entity from 'Entity';

export default class HomeModel extends React.Component{
    render(){
        return(
            
            <View>
               <Entity
               
               style={{
                   transform:[
                       {translate:[-30,-127, -100]},
                       {scale:0.25},
                   ],
               }}
               source={{
                   obj:asset('vrhouse3.obj'),
                   mtl:asset('vrhouse3.mtl')
               }}
               lit={true}
               />
               
               
            
            </View>
            
        );
    }
};