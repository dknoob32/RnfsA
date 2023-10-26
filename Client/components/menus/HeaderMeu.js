import { View, TouchableOpacity , StyleSheet } from 'react-native'
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';


const HeaderMeu = () => {
    //global state
    const [state,setState] = useContext(AuthContext)
    const handleLogout = async()=>{
        setState({token:"",user:null});
        await AsyncStorage.removeItem("@auth");
        alert("logout sucessfully")
    }
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5 name="sign-out-alt" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: "center",
    marginBottom: 5,
    fontSize: 25,
  },
});


export default HeaderMeu