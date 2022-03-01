
import CancelIcon from './../../../assets/close.svg';
import TagIcon from './../../../assets/tag.svg';
import Add from './../../../assets/add.svg';
import OvalIcon from './../../../assets/oval.svg';
import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const Tags = ({tags,handleChange}:{tags:Array<string>,handleChange:any}):JSX.Element => {
    const [addTag, setAddTag] = useState(false);
    const [newTag, setNewTag] = useState('');

    const createTag = ():void => {
        setAddTag(true);
    }

    const createNewTag = (e:any):void => {
        setNewTag(e.target.value);
    }

    const saveTag = ():void => {
        tags = [...tags, newTag];
        handleChange(tags);
        setAddTag(false);
    }

    const removeTag = (tag:string) => {
        handleChange(tags.filter((t:string) => t !== tag));
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
                            <TextInput style={styles.input} value={newTag} onChangeText={(text) => setNewTag(text)} />
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
                        tags.map((tag:string, index:number) => {
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