import React from 'react';
import { ImageBackground, ScrollView, Text, View, FlatList, Alert } from 'react-native';
import cssxd from '../views/cssxd';

export default class detail extends React.Component {
    static navigationOptions = { 
        title: 'Nature',
        headerPressColorAndroid: 'green',
        headerTintColor: 'rgba(0, 255, 0, .4)',
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'rgba(0, 255, 0, .4)' } 
    };
    
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: [],
            damage_df: [],
            damage_dt: [],
            damage_hf: [],
            damage_ht: [],
            damage_nf: [],
            damage_nt: [],
            pokemons: [],
            url: this.props.navigation.state.params.url
        }
    }

    componentDidMount() {
        this.getTypes(this.state.url);
    }

    getTypes = (kuk) => {
        this.setState({ loading: true });
        fetch(kuk)
        .then(res => res.json())
        .then(res => { 
            this.setState({ 
            name: res.name,
            pokemons: res.pokemon,
            damage_df: res.damage_relations.double_damage_from,
            damage_dt: res.damage_relations.double_damage_to,
            damage_hf: res.damage_relations.half_damage_from,
            damage_ht: res.damage_relations.half_damage_to,
            damage_nf: res.damage_relations.no_damage_from,
            damage_nt: res.damage_relations.no_damage_to,
            loading: false
        })})
        .catch(err => { Alert.alert('We have a problem...', err, [{ text: 'Ok' }])});
    };
  
    render() {
        if(this.state.loading) {
            return (
                <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                    <View>
                        <Text style = {[ cssxd.bigText, cssxd.center ]}>Loading Nature...</Text>
                    </View>
                </ImageBackground>
            );
        } 

    return (
        <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
            <ScrollView>
                <View> 
                    <Text style = {[ cssxd.bigText, cssxd.center ]}>Damage relations of { this.state.name }</Text>
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>Double damage from</Text>
                    <FlatList 
                        data = { this.state.damage_df }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>Double damage to</Text>
                    <FlatList
                        data = { this.state.damage_dt }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>half damage from</Text>
                    <FlatList
                        data = { this.state.damage_hf }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>half damage to</Text>
                    <FlatList
                        data = { this.state.damage_ht }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>no damage from</Text>
                    <FlatList
                        data = { this.state.damage_nf }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>no damage to</Text>
                    <FlatList
                        data = { this.state.damage_nt }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            this.getTypes(item.url)
                        }} style = { cssxd.text }>{ item.name }</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>pokemons with this nature</Text>
                    <FlatList
                        data = { this.state.pokemons }
                        renderItem = { ({item}) => <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('detail', { url: item.pokemon.url })
                        }} style = { cssxd.text }>{ item.pokemon.name }</Text> }
                    />
                </View>        
            </ScrollView>
        </ImageBackground>
    );
  }
}