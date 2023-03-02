import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LimitedMultiSelect = () => {
    const [biswo, setBiswo] = React.useState(false)
    const [pratyush, setPratyush] = React.useState(false)
    const [rajesh, setRajesh] = React.useState(false)
    const [swostik, setSwostik] = React.useState(false)
    const [kishan, setKishan] = React.useState(false)
    const [chinmaya, setChinmaya] = React.useState(false)
    const [kalia, setKalia] = React.useState(false)
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffff', flex: 1,marginTop:'10%' }}
            
        >
            <TouchableOpacity
                onPress={() => { setBiswo(!biswo) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: biswo ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: biswo ? '#ffff' : '#000',
                    }}
                >
                    Biswopaban Nayak
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setPratyush(!pratyush) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: pratyush ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: pratyush ? '#ffff' : '#000',
                    }}
                >
                    Pratysush Kumar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setKishan(!kishan) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: kishan ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: kishan ? '#ffff' : '#000',
                    }}
                >
                    Krishana Swami
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setChinmaya(!chinmaya) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: chinmaya ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: chinmaya ? '#ffff' : '#000',
                    }}
                >
                    Chinmayee Ray
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setRajesh(!rajesh) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: rajesh ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: rajesh ? '#ffff' : '#000',
                    }}
                >
                    Rajesh Kumar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setSwostik(!swostik) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: swostik ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: swostik ? '#ffff' : '#000',
                    }}
                >
                    Swostik Rudrakhya
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setKalia(!kalia) }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                    borderWidth: 1,
                    backgroundColor: kalia ? 'blue' : '#e1f8f9',
                    padding: 20,
                    borderColor: 'gray',
                    marginHorizontal: 15,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: kalia ? '#ffff' : '#000',
                    }}
                >
                    Kalpataru Mallik
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default LimitedMultiSelect

const styles = StyleSheet.create({})