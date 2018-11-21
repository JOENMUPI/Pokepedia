import React from 'react';
import { ImageBackground, Button, Text, View} from 'react-native';
import cssxd from '../views/cssxd';

export default class welcome extends React.Component {
    static navigationOptions = { 
        title: 'PokePedia',
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'rgba(0, 255, 0, .4)' }
    };

    goo() {
        const { navigate } = this.props.navigation;
        navigate('home');
    }
  
    render() {
        return (
            <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                <View>
                    <Text style = {[ cssxd.text, cssxd.bigText, cssxd.center ]}>Bienvenido!</Text>
                    <Text style = {[ cssxd.text, cssxd.center ]}>Se consume una api dirigida brindar informacion acerca de pokemoms.</Text>
                    <Button style = { cssxd.button } color = 'rgba(0, 255, 0, .4)' title = 'Entendido' onPress = { (this.goo.bind(this)) }/>
                </View> 
            </ImageBackground>
        );
    }
}