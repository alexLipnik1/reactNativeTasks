import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/NavigationBar.style';
import { faHome } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class NavBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.nav}>
                    <TouchableOpacity >
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}><FontAwesomeIcon icon={faHome} /></Text>
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
