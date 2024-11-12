import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boat from './Boats';


const AllBoats = () => {
    return (
        <ScrollView>
          <Text style={{fontWeight:'bold',textAlign:'center', fontSize:20,  color:'black', marginBottom:10, marginTop:10, backgroundColor:'grey', borderWidth:1, borderColor:'black', width:'80%', alignSelf: 'center'}}>
            GetABoat - For Sale
          </Text>
            <Boat
                icon_name="sailboat"
                title="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require('../img/sea_ray.jpg')} />
            <Boat
                icon_name="sailboat"
                title="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('../img/four_winns.jpg')} />
            <Boat
                icon_name="sailboat"
                title="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('../img/four_winns.jpg')} />

        </ScrollView>
    );
};

export default AllBoats;
