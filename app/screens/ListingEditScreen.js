import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Forniture", value: 1, backgroundColor: "#f4fab4", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "#95fab9", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "#a0d2f3", icon: "lock" },
  { label: "Forniture", value: 4, backgroundColor: "#fdcae1", icon: "apps" },
  { label: "Clothing", value: 5, backgroundColor: "#84b6f4", icon: "email" },
  { label: "Camera", value: 6, backgroundColor: "#ff6961", icon: "lock" },
  {
    label: "Movies & macos",
    value: 7,
    backgroundColor: "#ba9df4",
    icon: "apps",
  },
  { label: "Clothing", value: 8, backgroundColor: "#ffda89", icon: "email" },
  { label: "Camera", value: 9, backgroundColor: "#95fab9", icon: "lock" },
];
function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem} // se puede comentar number of columns y pickeritemcomponent
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
