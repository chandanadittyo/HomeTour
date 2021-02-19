import React from 'react';
import{
    AppRegistry,
    View,
    asset,
    VrButton,
} from 'react-360';
import HomeModel from './HomeModel';
import Lights from './Lights';
import Entity from 'Entity';
 export default class ThreeD extends React.Component{
     constructor(){
         super();
         this.state={
             xCurPos: 5.5,
             yCurPos: -5.5,
             zCurPos : -9,
             xTarPos: 5.5,
             yTarPos: -5.5,
             zTarPos : -9,
             

         };
         this.Lerp = this.Lerp.bind(this);
     }
     componentDidMount(){
         this.Lerp();
     }
     Lerp() {

         if ((Math.abs(this.state.xCurPos - this.state.xTarPos) > 0.3) ||
             (Math.abs(this.state.yCurPos - this.state.yTarPos) > 0.3) ||
             (Math.abs(this.state.zCurPos - this.state.zTarPos) > 0.3)) {
                if (Math.abs(this.state.yCurPos - this.state.yTarPos) > 0.3) {
                    //to match y xoordinates
                    this.setState({
                        yCurPos: this.state.yCurPos * (1 - 0.05) + this.state.yTarPos * 0.05
                    });
                }
             
            else if (Math.abs(this.state.xCurPos - this.state.xTarPos) > 0.3) {
                 //  to match the X coordinates
                 this.setState({
                     xCurPos: this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
                 });
             }
             

             else if (Math.abs(this.state.zCurPos - this.state.zTarPos) > 0.3) {
                 //to match Z xoordinates
                 this.setState({
                     zCurPos: this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
                 });
             }
             postMessage({ type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos });

         }
        
        requestAnimationFrame(this.Lerp);
      
        }


     render(){
         return(
             <View>
                 <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
                 {/*1st floor lift button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 0;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('up.obj'),
                    mtl:asset('up.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-10,1,3]},
                      
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>  

                 {/*2nd floor lift button*/}               
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 0;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('down.obj'),
                    mtl:asset('down.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-10,60,3]},
                       
                        
                        
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor coridor 1st button*/}
                 <VrButton 
                 onClick={() => {
                         this.state.xTarPos = 0;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-35,-17,3]},
                        {scale:.03},
                        
                    ],
                }}
                 />
                 </VrButton>
                 
                {/*1st floor coridor 2nd button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = -5;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,8]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor stairs 1st button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 70;
                         this.state.yTarPos = -9.5;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-112,-15,10]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor stairs 2nd button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 100;
                         this.state.yTarPos = -14.5;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-140,0,9]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor stairs 3rd button*/}
                 <VrButton
                     onClick={() => {
                         this.state.xTarPos = 130;
                         this.state.yTarPos = -30;
                         this.state.zTarPos = -5;

                     }}>
                     <Entity
                         source={{
                             obj: asset('pointer.obj'),
                             mtl: asset('p.mtl')
                         }}
                         lit={true}
                         style={{
                             transform: [
                                 { translate: [-170, 7, 9] },
                                 { scale: .03 },
                             ],
                         }}
                     />
                 </VrButton>
                 {/*2nd floor stairs 1st button*/}
                 <VrButton
                     onClick={() => {
                         this.state.xTarPos = 130;
                         this.state.yTarPos = -30;
                         this.state.zTarPos = 12;

                     }}>
                     <Entity
                         source={{
                             obj: asset('pointer.obj'),
                             mtl: asset('p.mtl')
                         }}
                         lit={true}
                         style={{
                             transform: [
                                 { translate: [-170, 7, -10] },
                                 { scale: .03 },
                             ],
                         }}
                     />
                 </VrButton>

                 {/*2nd floor stairs 2nd button*/}

                 <VrButton
                     onClick={() => {
                         this.state.xTarPos = 100;
                         this.state.yTarPos = -50;
                         this.state.zTarPos = 12;

                     }}>
                     <Entity
                         source={{
                             obj: asset('pointer.obj'),
                             mtl: asset('p.mtl')
                         }}
                         lit={true}
                         style={{
                             transform: [
                                 { translate: [-140, 20, -10] },
                                 { scale: .03 },
                             ],
                         }}
                     />
                 </VrButton>
                 {/*2nd floor stairs 3rd button*/}
                 <VrButton
                     onClick={() => {
                         this.state.xTarPos = 70;
                         this.state.yTarPos = -60;
                         this.state.zTarPos = 12;

                     }}>
                     <Entity
                         source={{
                             obj: asset('pointer.obj'),
                             mtl: asset('p.mtl')
                         }}
                         lit={true}
                         style={{
                             transform: [
                                 { translate: [-115, 36, -10] },
                                 { scale: .03 },
                             ],
                         }}
                     />
                 </VrButton>
                 {/*1st floor drawing room 1st button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 40;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,-40]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor drawing room 2nd button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                {/*1st floor dining room 1st button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor dining room 2nd button right corner room*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -10;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-30,-17,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor dining room 3rd button infront kitchen*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -10;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 160;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-30,-17,-160]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor Kitchen room  button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -70;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 160;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[25,-17,-160]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor  right side room 1st button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -50;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[10,-17,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor  right side room 2nd button infront toilet*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -50;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 105;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[10,-17,-105]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor right side room button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -65;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 60;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[20,-17,-60]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                {/*1st floor right side room toilet button*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -100;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 105;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[60,-17,-105]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor dining room 4th button infront 1st left side room*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 170;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,-170]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                {/*1st floor dining room 5th button infront 2nd left side room*/}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 205;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,-17,-205]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                {/*1st floor  2nd left side room 1st button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 90;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 210;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-130,-17,-210]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor  2nd left side room 2nd button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 90;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 250;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-130,-17,-250]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                {/*1st floor  1st left side room 1st button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 170;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,-17,-170]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor  1st left side room 2nd button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 145;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,-17,-145]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 {/*1st floor  1st left side room 3rd button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,-17,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                {/*1st floor  1st left side room 4th button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 140;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-180,-17,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 {/*1st floor  1st left side room toilet button */}
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 110;
                         this.state.yTarPos = -5.5;
                         this.state.zTarPos = 145;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-150,-17,-145]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 
                 {/*2nd floor  Button Start From Here */}
                 {/*2nd floor  Coridor button */}
                 <VrButton 
                 onClick={() => {
                         this.state.xTarPos = 0;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = -5;
                    
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-35,39,3]},
                        {scale:.03},
                        
                    ],
                }}
                 />
                 </VrButton>
                 {/*2nd floor  Coridor button */}

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = -5;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,8]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>


                {/*2nd floor  Drawing room button */}
                <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 40;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,-40]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -10;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-30,39,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -10;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 160;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-30,39,-160]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -60;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 160;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[20,39,-160]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -50;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 130;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[10,39,-130]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -50;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 105;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[10,39,-105]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -65;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 60;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[20,39,-60]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = -100;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 105;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[60,39,-105]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 170;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,-170]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 35;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 205;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-75,39,-205]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 90;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 210;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-130,39,-210]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 90;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 250;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-130,39,-250]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 170;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,39,-170]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,39,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 140;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 90;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-180,39,-90]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>

                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 75;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 145;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-115,39,-145]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 <VrButton
                 onClick={() => {
                         this.state.xTarPos = 110;
                         this.state.yTarPos = -65;
                         this.state.zTarPos = 145;
                  }}>
                 <Entity
                 source={{
                    obj:asset('pointer.obj'),
                    mtl:asset('p.mtl')
                 }}
                 lit={true}
                 style={{
                    transform:[
                        {translate:[-150,39,-145]},
                        {scale:.03},
                    ],
                }}
                 />
                 </VrButton>
                 
                 
                 
                 
                 <HomeModel/>
                 <Lights/>
                 
             </View>
         );
     }
};