import React, { useEffect, useState } from "react"
import { Button, DataTable } from "react-native-paper"
import * as ScreenOrientation from "expo-screen-orientation"

import { ScrollView, View, Text, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import AddEditTask from "./component/addTask/AddEditTask"

const optionsPerPage = [2, 3, 4]

const data = [
  {
    title: "Tâche1",
    date: "06/07/2020 ",
    start: "08.52",
    end: "14.00",
  },
  {
    title: "Tâche2",
    date: "07/07/2020 ",

    start: " 18.00",
    end: " 19.00",
  },
  {
    title: "Tâche3",
    date: "06/08/2020 ",

    start: "20.00",
    end: "08.20",
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
      <AddEditTask />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>titre</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
          <DataTable.Title numeric>Heure début</DataTable.Title>
          <DataTable.Title numeric>Heure fin</DataTable.Title>
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
        <DataTable.Cell>{task.title} </DataTable.Cell>
        <DataTable.Cell numeric>{task.date}</DataTable.Cell>

        <DataTable.Cell numeric> {task.start} </DataTable.Cell>
        <DataTable.Cell numeric> {task.end} </DataTable.Cell>
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
