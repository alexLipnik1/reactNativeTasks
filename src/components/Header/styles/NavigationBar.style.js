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
        backgroundColor: '#56567d',
    },
    btn:{
        paddingBottom: 10,
        height: 65,
        width: 70,
        margin: 4,

    },
    txt:{
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
  });

export default styles;