import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: 365,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        height: 60,
        width: 365,
        backgroundColor: '#6cafda',
    },
    btn:{
        height: 65,
        width: 80,
        margin: 2,

    },
    txt:{
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    }
  });

export default styles;