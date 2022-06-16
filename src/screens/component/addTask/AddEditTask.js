import React, { useState } from "react"
import { Alert, Modal, StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"
import Form from "./FormTask"

const AddEditTask = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ marginBottom: 20, fontSize: 25 }}>
              Détails Tâche
            </Text>
            <Form />
            <Button
              onPress={() => setModalVisible(!modalVisible)}
            >
              Fermer
            </Button>
          </View>
        </View>
      </Modal>
      <Button
        labelStyle={{ fontSize: 20 }}

        icon="note-plus"
        onPress={() => setModalVisible(true)}
      >
        Ajouter une Tâche
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})

export default AddEditTask
