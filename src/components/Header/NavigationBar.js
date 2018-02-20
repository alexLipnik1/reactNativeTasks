import { Text,  View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/NavigationBar.style';
import { faHome, faBars } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class NavBar extends React.Component{
    constructor () {
        super()
            this.state = {
                selectedIndex: 2
            }
        this.updateIndex = this.updateIndex.bind(this)
    }
    
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }    
    
    render(){
        const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state
        
        return(
            <View style={styles.container}>
                <View style={styles.nav}>
                    <TouchableOpacity >
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}><FontAwesomeIcon icon={faBars} size="1x"   /></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}












