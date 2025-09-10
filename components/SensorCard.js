import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

const SensorCard = (props) => {
  const styles = createStyles(useTheme());

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{props.icon}</Text>
        </View>
        <Text style={styles.cardTitle}>{props.title}</Text>
      </View>
      <View style={styles.valueDisplay}>
        <Text style={styles.value}>
          {props.value !== null ? props.value.toFixed(1) : "--"}
        </Text>
        <Text style={styles.unit}>{props.unit}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Mínima: </Text>
          <Text style={styles.statValue}>
            {props.min !== null
              ? `${props.min.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Máxima: </Text>
          <Text style={styles.statValue}>
            {props.max !== null
              ? `${props.max.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.card,
      padding: 20, // Padding direto no container principal
      justifyContent: "center", //Centraliza o conteúdo verticalmente
      marginTop: 10,
      borderRadius: 15,
      width: 350,
    },
    cardText: {
      color: theme.text,
    },
    iconText:{
      alignItems:"flex-end",
      justifyContent:"flex-end",
      fontSize:25,
    },
    cardTitle:{
      fontSize:25,
      color:theme.textCard
    },
    valueDisplay:{
      flexDirection:"row"
    },
    value:{
    fontSize:23,
    fontWeight:"bold",
    color:theme.textCard
    },
    unit:{
    fontSize:23,
    fontWeight:"bold",
    color:theme.textCard
    },
    stat:{
      flexDirection:"row"
    },
    statLabel:{
      fontSize:16,
      fontWeight:"bold",
      color:theme.textCard
    },
    statValue:{
      color:theme.textCard
    }

  });

export default memo(SensorCard);
