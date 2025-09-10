import React from 'react'
import { useColorScheme, View, Text } from 'react-native'

const lightTheme  = {
    background: "#f0f0f0",
   
  };
  
  const darkTheme ={
    background: "#121212",
    
  }

const SensorCard = (props) => {
const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  return (
 <View style={styles.container}> 
<Text style={{color: "#fff"}}>Funcionou?{props.funcionou}</Text>
 </View>
  );
}

const createStyles = (theme) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
      justifyContent: "center",
    },
});

export default memo(SensorCard) // memoria, ele so atualiza se tiver atualização