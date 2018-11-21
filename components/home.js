import React from 'react';
import { Alert, ImageBackground, Text, View, FlatList } from 'react-native';
import cssxd from '../views/cssxd';

export default class welcome extends React.Component {
    static navigationOptions = { 
        title: 'Home',
        headerTintColor: 'rgba(0, 255, 0, .4)',
        headerPressColorAndroid: 'green',
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'rgba(0, 255, 0, .4)' } 
    };
    constructor(props) {
        super(props);
        this.state = {
        loading: false,
        pokemons: [],
        imgPokemos: [],
        url: 'https://pokeapi.co/api/v2/pokemon/'
        };
    }

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = () => {
        this.setState({ loading: true });
        fetch(this.state.url)
        .then(res => res.json())
        .then(res => { this.setState({ pokemons: res.results, loading: false })})
        .catch(err => Alert.alert('We have a problem...', err, [{ text: 'Ok' }]));
    };
  
    render() {
        if(this.state.loading){
            return (
                <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                    <View>
                        <Text style = {[ cssxd.bigText, cssxd.center ]}>Loading...</Text>
                    </View> 
                </ImageBackground>
            );
        } 

        return (
            <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                <View>
                    <FlatList
                        data = { this.state.pokemons }
                        renderItem = { ({ item }) => <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('detail', { url: item.url })
                        }} style = {[ cssxd.bigText, cssxd.item, cssxd.center ]}>{ item.name }</Text> }
                        //keyExtractor = { (item, index) => index.toString }
                    />
                </View>
            </ImageBackground>
        );
    }
}