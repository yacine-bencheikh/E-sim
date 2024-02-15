import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Bienvenue sur la PoSGUI</Text>
                <Text style={styles.paragraph}>Vous étes sur le point de réservation de profile e-sim Veuilliez démarer le processus en cliquant sur la bouton ci-dessous</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('')}}><Text style={styles.buttonText}>Nouvel réservation de profil</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Détails des réservations</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Gestion des Utilisateurs</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Uploader un fichier</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Statistique</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#007BFF',
        // alignItems: 'center',
        
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        alignItems: 'center',
        color: '#fff',
        
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#888',
        
    },
    button: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 6,
        borderRadius: 6,
    },
    buttonText: {
        color: '#007BFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

        // backgroundColor: '#7777',
    },
});