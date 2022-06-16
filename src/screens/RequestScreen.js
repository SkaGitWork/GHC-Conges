import React, { useEffect, useState } from "react"
import { Button, DataTable } from "react-native-paper"

import { ScrollView, View, Text, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import AddEditTask from "./component/addTask/AddEditTask"
import AddEditRequest from "./component/addRequest/AddEditRequest"

const optionsPerPage = [2, 3, 4]

const data = [
  {
    type: "Congé avec solde",
    start: "22/05/2020 08.52",
    end: "01/09/2020 14.00",
    cause: "cause",
  },
  {
    type: "Congé avec solde",
    start: "05/01/2022 18.00",
    end: "01/02/2020 18.00",
    cause: "cause",
  },
  {
    type: "Congé sans solde",
    start: "06/07/2020 20.00",
    end: "01/11/2020 08.20",
    cause: "cause",
  },
]

const TaskScreen = ({ navigation }) => {
  const [page, setPage] = React.useState(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])

  React.useEffect(() => {
    setPage(0)
  }, [itemsPerPage])

  {
  }

  return (
    <View>
      <AddEditRequest />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title numeric>Date Départ</DataTable.Title>
          <DataTable.Title numeric>Date Finale</DataTable.Title>
          <DataTable.Title numeric>Cause</DataTable.Title>
          <DataTable.Title  numeric>
            <Text style={{ paddingRight: 20 }}>Action</Text>
          </DataTable.Title>
        </DataTable.Header>

        {data.map((task, key) => tableRow(task, key))}

        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        />
      </DataTable>
    </View>
  )

  function tableRow(task, key) {
    return (
      <DataTable.Row key={key}>
        <DataTable.Cell>{task.type}</DataTable.Cell>
        <DataTable.Cell numeric>{task.start}</DataTable.Cell>
        <DataTable.Cell numeric>{task.end}</DataTable.Cell>
        <DataTable.Cell numeric>{task.cause}</DataTable.Cell>
        <DataTable.Cell numeric>
          <Button
            icon="delete"
            style={{ paddingLeft: 25 }}
            labelStyle={{ fontSize: 25, color: "red" }}
          ></Button>
        </DataTable.Cell>
      </DataTable.Row>
    )
  }
}

export default TaskScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 500,
    // paddingBottom: 50,
    // width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
})
