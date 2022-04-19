import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fbfbf8',
        paddingTop: 40,
    },
    HomLabel: {
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
        borderRadius:80,
    },
    ButtonLogin:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#6495ED',
        paddingTop:12,
        paddingBottom:14,
        marginLeft:12,
        marginTop:20,
    },
    ButtonCadastro:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#FF6347',
        paddingTop:12,
        paddingBottom:14,
        marginLeft:12,
        marginTop:20,
    },
    textButton:{
        fontSize: 20,
        color: "#ffffff",
    }    
});

export default styles