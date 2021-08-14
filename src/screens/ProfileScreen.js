import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/dexter.jpg')}/>

                
            </View>

            <View style={styles.detailscontainer}>
                <View style={styles.details}>
					<Text style={styles.detailLabel_1}>School</Text>
					<Text style={styles.detailContent}>Codetrain, Ghana</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailLabel_1}>Email Address</Text>
					<Text style={styles.detailContent}>Kojo@yahoo.com</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailLabel_2}>Name</Text>
					<Text style={styles.detailContent}>Elikem Ahlijah</Text>
                    <Text style={styles.line}></Text>
				</View>

                <View style={styles.details}>
					<Text style={styles.detailLabel_2}>Nick Name</Text>
					<Text style={styles.detailContent}>Kun lee</Text>
                    <Text style={styles.line}></Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailLabel_2}>Emergency Contact</Text>
					<Text style={styles.detailContent}>Codetrain</Text>
                    <Text style={styles.line}></Text>
				</View>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Update Profile</Text>
				</TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25,
        marginHorizontal:40
    },
    imageContainer:{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailscontainer:{
        flex:0.6,

    },

    buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image:{
        width: 120,
        height: 120,
        borderRadius: 100
    },

    button:{
        width: '100%',
		height: 50,
		backgroundColor: 'skyblue',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
    },
    buttonText: {
		color: 'white',
		fontSize: 15,
	},
	line: {
		width: '100%',
		height: 2,
		backgroundColor: 'lightgrey',
	},
	details: {
		marginVertical: 10,
	},
	detailLabel_1: {
		color: '#bbb',
		fontSize: 15,
		marginBottom: 4,
	},
    detailLabel_2: {
		color: 'skyblue',
		fontSize: 15,
		marginBottom: 4,
	},
	detailContent: {
		fontSize: 18,
	},


})

export default ProfileScreen
