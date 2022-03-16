import { ScrollView, Spinner, Text, View } from "native-base";
import React, { useState } from "react";
import { FlatList, Keyboard, TextInput, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const CustomDropDown = ({text,setText}:{text:string,setText:React.Dispatch<React.SetStateAction<string>>}) => {
    const items = useSelector((state: RootState) => state.category.categories);
    const isLoading = useSelector((state: RootState) => state.category.isCategoryLoading);
    const [showList,setShowList] = useState(false);

    const selectCategory = (title:string) => {
        setText(title);
        setShowList(false)
        Keyboard.dismiss()
    }

    const [filteredData, setFilteredData] = useState(items);

      const Item = ({ title }:{title:string}) => (
        <TouchableOpacity onPress={() => selectCategory(title)}>
            <Text p="1" fontFamily="Poppins" fontStyle="normal" fontSize="12" lineHeight="23">{title}</Text>
        </TouchableOpacity>
      );

      const renderItem = ({ item }:{item:{id:string,name:string}}) => (
        <Item title={item.name} />
      );

      const filterUsingSearch = (text:string) => {
        setText(text)
        const newData = items.filter((item:{id:string,name:string}) => {
          const itemData = item.name.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
    }

    return (
        <View>
            {isLoading && <Spinner accessibilityLabel="Loading categories"  size="lg" color="black.800" mt="1" />}
            {!isLoading &&
                <View>
                    <View>
                        <TextInput  onFocus={() => setShowList(true)} value={text} style={{ borderBottomWidth: 1, borderBottomColor: '#E2E2EA', padding: 0 }} onChangeText={(text: string) => { filterUsingSearch(text) }} />
                    </View>
                    {showList && 
                        <ScrollView horizontal={true} style={{ width:"100%",borderWidth:1,borderColor:"#F1F1F5"}}>
                            <FlatList
                                data={filteredData}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </ScrollView>
                    }
                </View>
            }
        </View>
    )
}

export default CustomDropDown;