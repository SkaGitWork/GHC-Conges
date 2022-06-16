import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, TextInput } from "react-native-paper"
import DatePicker from "react-native-datepicker"
import { Checkbox, RadioButton } from "react-native-paper"
import { useState } from "react"

const Form = () => {
  const [feedback, setFeedback] = useState()
  const [formData, setFormData] = useState({
    congeSolde: false,
    cause: "",
  })
  console.log(formData)

  const submit = async () => {
    setFeedback("Success")
  }

  return (
    <View>
      {textInput({ label: "Tâche", value: "title" })}

      {datePicker({ label: "Date", mode: "date" })}
      {datePicker({ label: "Heure début", mode: "time" })}
      {datePicker({ label: "Heure fin", mode: "time" })}


      <Button onPress={submit}>Enregistrer</Button>
      <Text>{feedback}</Text>
    </View>
  )
  function radioButtons() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Text>Congé solde</Text>
        <RadioButton
          value={false}
          status={formData.congeSolde === true ? "checked" : "unchecked"}
          onPress={() => setFormData({ ...formData, congeSolde: true })}
        />
        <Text>Congé sans solde</Text>
        <RadioButton
          value={true}
          status={formData.congeSolde === false ? "checked" : "unchecked"}
          onPress={() => setFormData({ ...formData, congeSolde: false })}
        />
      </View>
    )
  }

  function textInput({ keyboardType, label, value }) {
    return (
      <TextInput
        style={{ height: 40, marginBottom: 20 }}
        mode="outlined"
        keyboardType={keyboardType}
        label={label}
        value={formData[value]}
        returnKeyType="next"
        onChangeText={(text) => {
          setFormData({ ...formData, [value]: text })
        }}
      />
    )
  }

  function datePicker({ label, mode }) {
    return (
      <DatePicker
        style={{ flex: 1, marginBottom: 20, width: "100%" }}
        date={formData.birthday} //initial date from state
        mode={mode} //The enum of date, datetime and time
        placeholder={label}
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            // height: '80%',
          },
          dateInput: {
            marginLeft: 36,
          },
          dateText: {
            color: "black",
          },
          dateInput: {
            backgroundColor: "white",
            borderColor: "#00000080",
          },
        }}
        onDateChange={(date) => {
          setFormData({ ...formData, birthday: date })
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
})

export default Form
