
import CancelIcon from './../../../assets/images/close.svg';
import TagIcon from './../../../assets/images/tag.svg';
import Add from './../../../assets/images/add.svg';
import OvalIcon from './../../../assets/images/oval.svg';
import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

interface Tag {
    name:string
}
const Tags = ({tags,handleChange}:{tags:Array<Tag>,handleChange:any}):JSX.Element => {

    const tagsArray = tags.map((tag:Tag) => tag.name)
    const [addTag, setAddTag] = useState(false);
    const [newTag, setNewTag] = useState({name:''});

    const createTag = ():void => {
        setAddTag(true);
    }

    const saveTag = ():void => {
        handleChange([...tagsArray,newTag]);
        setAddTag(false);

    }

    const removeTag = (tag:string) => {
        handleChange(tagsArray.filter((t) => t !== tag));
    }
    return (
        <View style={styles.container}>
            <TagIcon/>
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>TAGS</Text>
                <View style={styles.createTag}>
                    {
                        addTag &&
                        <View style={styles.updateBox}>
                            <TextInput style={styles.input} value={newTag.name} onChangeText={(text) => setNewTag(text)} />
                            <Button title="Save" onPress={saveTag}/>
                        </View>

                    }
                    {
                        !addTag &&
                        <TouchableHighlight onPress={createTag}>
                            <View style={styles.createTag}>
                                <Add/>
                                <Text style={styles.subText}>Add Tag</Text>
                            </View>
                        </TouchableHighlight>

                    }
                </View>
                <View>
                    {
                        tagsArray && 
                        tagsArray.map((tag:any, index:number) => {
                            return (
                                <View style={styles.tag} key={index}>
                                    <OvalIcon />
                                    <Text style={styles.tagText}>{tag}</Text>
                                    <CancelIcon onPress={() => removeTag(tag) } style={styles.cancel}/>
                                </View>
                            )   
                        })
                    }
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2EA",
        padding: 12,
    },
    subText: {
        paddingLeft: 12,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#5F8FE3",
    },
    updateBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: "80%",
    },
    subContainer: {
        display: "flex",
        width: "100%",
        paddingLeft: 14,
    },
    headerText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#92929D",
    },
    createTag: {
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginRight: 10,
    },
    cancel:{
        justifyContent: "flex-end",
    },
    tagText: {
        marginLeft: 12,
        flex: 1,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#44444F",
    }
});

export default Tags;