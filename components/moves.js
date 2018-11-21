import React from 'react';
import { ImageBackground, ScrollView, FlatList, Text, View, Alert } from 'react-native';
import cssxd from '../views/cssxd';

export default class detail extends React.Component {
    static navigationOptions = { 
        title: 'Move',
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
            nature: '',
            name: '',
        }
    }

    componentDidMount() {
        this.getMoves(this.props.navigation.state.params.url);
    }

    componentWillReceiveProps(next_props) {
        this.getMoves(next_props.navigation.state.params.url);
    }

    getMoves = (kuk) => {
        this.setState({ loading: true });
        fetch(kuk)
        .then(res => res.json())
        .then(res => { 
            this.setState({ 
            name: res.name,
            effect: res.effect_entries,
            nature: res.type,
            loading: false
        })})
        .catch(err => { Alert.alert('We have a problem...', err, [{ text: 'Ok' }])});
    };
  
    render() {
        if(this.state.loading){
            return (
                <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
                    <View>
                        <Text style = {[ cssxd.bigText, cssxd.item ]}>Loading Movement...</Text>
                    </View>
                </ImageBackground>
            );
        } 

    return (
        <ImageBackground source = { require('../img/kaka.jpg') } style = { cssxd.container }>
            <ScrollView>
                <View style={{ flex: 1, paddingTop: 50, paddingLeft: 5 }}> 
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>Effect</Text>
                    <FlatList
                        data = { this.state.effect }
                        renderItem = { ({item}) => <Text style = { cssxd.text }>{ item.effect } ({ item.short_effect })</Text> }
                    />
                    <Text style = {[ cssxd.bigText, cssxd.item ]}>nature of this movement</Text>
                    <Text onPress = { ()=> { 
                            const { navigate } = this.props.navigation; 
                            navigate('types', { url: this.state.nature.url })
                        }} style = { cssxd.text }>{ this.state.nature.name }</Text>
                </View>        
            </ScrollView>
        </ImageBackground>
    );
  }
}