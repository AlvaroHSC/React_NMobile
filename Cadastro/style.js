import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fbfbf8',
        paddingTop: 80,
    },
    CadLabel: {
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width:"90%",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        backgroundColor: "#ffffff",
        height:30,
        margin:12, 
        paddingLeft:10,
        borderRadius:50,
    },
    ButtonSalvar:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#6495ED',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButton:{
        fontSize: 20,
        color: "#ffffff",
    },
});

export default styles