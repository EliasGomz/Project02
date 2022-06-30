 import React from 'react';
 import {
   ScrollView,
   Text,
   View,
   TouchableOpacity, 
 } from 'react-native';
 import departament from '../../components/array';
 import styles from './styles';
 import { useState } from 'react';
 
 const HomePage = () => {
    
    const [list, setList] = useState([]);
    const [list1, setList1] = useState([]);
    
    const Edad = () =>{
        let listAge = [];
        for (const depart in departament) {
            const element = departament[depart];
            element.forEach(value => {
                if (value.age === 27) {
                    listAge.push(value);
                }
            });
        }
        setList1(listAge);
    }

 // buscar destructuracion

    const DesOrd = () =>{ 
        let depar = [];

        for (const depart in departament) {
            depar = depar.concat(departament[depart]); 
        }
        depar.sort((a, b) => a.age < b.age);
        setList(depar); 
    }

    
    const PrinAge = () => {
        return(
            <View style={styles.list1}>
                {
                    list1.map(({firstName, age}, index) => {
                        return <Text style={styles.Text} key={`${index}-${firstName}`}>{`${firstName} ${age}`}</Text>
                    })
                }
            </View>
        );
    }


    const PrinAgeDes = () => {
        return(
            <View style={styles.list2}>
                {
                    list.map(({firstName, lastName, age}, index) => {
                        return <Text style={styles.Text} key={`${index}-${firstName}`}>{`${firstName} ${lastName} ${age}`}</Text>
                    })
                }
            </View>
        );
    }


    return(
        <View style = {styles.container}>

            <ScrollView>  
                <View>{PrinAgeDes()}</View>
                <View>{PrinAge()}</View>
            </ScrollView>

            <View style = {styles.container2}>
                <TouchableOpacity style={styles.btn1} onPress={() => DesOrd()} >
                    <Text style={styles.textBtn}>Ord. Des.</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn2} onPress={() => Edad()} >
                    <Text style={styles.textBtn}>Edad</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

 }
 export default HomePage;