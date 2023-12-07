import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import TextBoxInput from "../../../components/textBox";
import Dropdown from "../../../components/dropdown";
import React, { useEffect } from "react";
import * as Contacts from 'expo-contacts';
import { ReportMethod, useReporter } from "../../../lib/reporting_ctx";

export default function Home() {
  const [contacts, setContacts] = React.useState<Contacts.Contact[]>([]);
  const [searchContacts, setSearchContacts] = React.useState<Contacts.Contact[]>([]);
  const { buildReporter } = useReporter();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });

        if (data.length > 0) {
          data.sort((a, b) => { return a.name?.localeCompare(b.name ?? "") ?? 0 });
          // Remove duplicates or no phone numbers
          let i = 0;
          while (i < data.length - 1) {
            if (data[i].phoneNumbers?.length === 0 || data[i].name === data[i + 1].name) {
              data.splice(i, 1);
            } else {
              i++;
            }
          }
          setContacts(data);
        }
      }
    })();
  }, []);


  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <KeyboardAvoidingView behavior={"padding"}>
        <Header
          showLogo
          title="Let's get their digits"
          body="Muahahahahaha :)"
          color="spotify"
          textColor="black"
          onBack={() => router.back()}
          action={
            // Buttons go here
            <View style={{ width: "100%", marginBottom: 20, marginTop: 10, }}>
              <TextBoxInput placeholder="Search for a contact" onChange={
                (text) => {
                  setSearchContacts(contacts.filter((_) => _.name?.toLowerCase().includes(text.toLowerCase())));
                }
              } />
              <Dropdown options={(searchContacts.length !== 0 ? searchContacts : contacts).map((_) => _.name)} maxCount={1} onPress={(selected) => {
                let contact = (searchContacts.length !== 0 ? searchContacts : contacts).find((_) => _.name === selected);
                buildReporter({
                  handle: contact!.phoneNumbers?.[0].digits ?? "",
                  name: contact!.name ?? "",
                  method: ReportMethod.Text,
                })
                router.push("/reporting");
              }} />
            </View>
          }
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
