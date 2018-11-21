import React from 'react';
import { ImageBackground, ScrollView, Text, View, FlatList, Alert } from 'react-native';
import cssxd from '../views/cssxd';

export default class detail extends React.Component {
    static navigationOptions = { 
        title: 'Ability',
        headerPressColorAndroid: 'green',
        headerTintColor: 'rgba(0, 255, 0, .4)',
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'rgba(0, 255, 0, .4)' }, 
    };
    
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            effect: [],
            pokemons: [],
        }
    }

    componentDidMount() {
        this.getAbilities(this.props.navigation.state.params.url);
    }

    componentWillReceiveProps(next_props) {
        this.getAbilities(next_props.navigation.state.params.url);
    }

    getAbilities = (kuk) => {
        this.setState({ loading: true });
        fetch(kuk)
        .then(res => res.json())
        .then(res => { 
            this.setState({ 
            name: res.name,
            pokemons: res.pokemon,
            effect: res.effect_entries,
            loading: false
        })})
        .catch(err => { Alert.alert('We have a problem...', err, [{ text: 'Ok' }])});
    };
  
    render() {
        if(this.state.loading){
            return (
                <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                    <View>
                        <Text style={[ cssxd.bigText, cssxd.item ]}>Loading Ability...</Text>
                    </View>
                </ImageBackground>
            );
        } 

    return (
        <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
            <ScrollView>
                <View> 
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>Effects of { this.state.name }</Text>
                    <FlatList
                        data = { this.state.effect }
                        renderItem = { ({item}) => <Text style = { cssxd.text }>{ item.effect } ({ item.short_effect })</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>pokemons with this ability</Text>
                    <FlatList
                        data = { this.state.pokemons }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('detail', { url: item.pokemon.url })
                        }} style={ cssxd.text }>{ item.pokemon.name }</Text> }
                    />
                </View>        
            </ScrollView>
        </ImageBackground>
    );
  }
}