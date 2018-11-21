import React from 'react';
import { ImageBackground, ScrollView, Image, Text, View, FlatList, Alert } from 'react-native';
import cssxd from '../views/cssxd';

export default class detail extends React.Component {
    static navigationOptions = { 
        title: 'Detail',
        headerPressColorAndroid: 'green',
        headerTintColor: 'rgba(0, 255, 0, .4)',
        headerStyle: { backgroundColor: 'black', },
        headerTitleStyle: { color: 'rgba(0, 255, 0, .4)' } 
    };

    constructor(props){
        super(props);
        this.state = {
            name: '',
            loading: false,
            img: '',
            types: [],
            stats: [],
            abilities: [],
            moves: [], 
        }
    }

    componentDidMount(){
        this.getDetailss(this.props.navigation.state.params.url);
    }

    componentWillReceiveProps(next_props) {
        this.getDetailss(next_props.navigation.state.params.url);
    }

    getDetailss = (kuk) => {
        this.setState({ loading: true });
        fetch(kuk)
        .then(res => res.json())
        .then(res => { 
            this.setState({
                name: res.name,
                stats: res.stats,
                img: res.sprites.front_default,
                types: res.types,
                abilities: res.abilities,
                moves: res.moves,
                loading: false
            })
        })
        .catch(err => { Alert.alert('We have a problem...', err, [{ text: 'Ok' }])});
    };
  
    render() {
        if(this.state.loading){
            return (
                <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                    <View>
                        <Text style = {[ cssxd.bigText, cssxd.center ]}>Loading Detail...</Text>
                    </View>
                </ImageBackground>
            );
        } 

    return (
        <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
            <ScrollView>
                <View>
                <Text style={[ cssxd.item, cssxd.bigText, cssxd.center ]}>{ this.state.name }</Text>
                <Image style = { cssxd.img } source = {{ uri: this.state.img }} /> 
                    <Text style = {[ cssxd.item, cssxd.bigText ]}>Stats</Text>
                    <FlatList
                        data = { this.state.stats }
                        renderItem = { ({item}) => <Text style = { cssxd.text }>{ item.stat.name }: { item.base_stat }</Text> }
                    />
                    <Text style = {[ cssxd.item, cssxd.bigText]}>Nature</Text>
                    <FlatList
                        data = { this.state.types }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('types', { url: item.type.url })
                        }} style = { cssxd.text }>{ item.type.name }</Text> }
                    />
                    <Text style = {[ cssxd.item, cssxd.bigText]}>Abilities</Text>
                    <FlatList
                        data = { this.state.abilities }
                        renderItem = { ({item}) => <Text  onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('abilities', { url: item.ability.url })
                        }} style = { cssxd.text }>{ item.ability.name }</Text> }
                    />
                    <Text style = {[ cssxd.item, cssxd.bigText]}>Moves</Text>
                    <FlatList
                        data = { this.state.moves }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('moves', { url: item.move.url })
                        }} style = { cssxd.text }>{ item.move.name }</Text> }
                    />
                </View>        
            </ScrollView>
        </ImageBackground>
    );
  }
}