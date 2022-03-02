// import { StyleSheet, Text, View } from "react-native"
// import Priority from "../../components/view-task/Priority";
// import CategoryName from "../../components/view-task/CategoryName";
// import Description from "../../components/view-task/Description";
// import CloseIcon from './../../../assets/images/close.svg';
// import Tags from "../../components/view-task/Tags";
// import DueDate from "../../components/view-task/DueDate";
// import RemindMe from "../../components/view-task/RemindMe";
// import Repeat from "../../components/view-task/Repeat";
// import TaskTitle from "../../components/view-task/TaskTitle";
// import DeleteIcon from './../../../assets/images/delete.svg';
// import { logger } from "react-native-logs";
// import { useEffect, useState } from "react";
// import { updateTask } from "./taskSlice";
// import { useDispatch } from "react-redux";

// const ViewTask = ({navigation,route}:{navigation:any,route:any}) => {
//     // const task = route.params.task;
//     const [task,setTask] = useState({"id" : route.params.task.id,
//                                     "task" : route.params.task.title,
//                                     "description" : route.params.task.description});
   
//     // const editTask = (key:string,value:string) => {
//     //     setTask({...task, [key]: value})
//     // }

//     useEffect(() => {
//         setTask(route.params.task);

//       });
    
//     const editTask = (key:string,value:string) => {
//         // setTask({...task, 'description': value})
//         // setTask({...task, [key]: value})
//         setTask(prevState => ({
//             ...prevState,
//             [key]: value
//         }));
//         var log = logger.createLogger();
//         log.info(task);
//     }
//     const dispatch = useDispatch()

//     const save = () => {
//         // taskUpdated(task)
//         dispatch(updateTask({...task}))
//         navigation.navigate('My Day Tasks')
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.view}>
//                 <View style={styles.header}>
//                     <Text style={styles.headerText}>TASK DETAILS</Text>
//                     <View>
//                         <CloseIcon onPress={() =>
//                             navigation.navigate('My Day Tasks')
//                         }/>
//                     </View>
//                 </View>
//                 <View style={styles.contents}>
//                     <TaskTitle title={task.task} handleChange={() => {}}/>
//                     <Description description={task.description} handleChange={editTask}/>
//                     {/* <CategoryName category={task.category} handleChange={() => {}}/>
//                     <Priority priority={task.priority} />
//                     <Tags tags={task.tags} handleChange={() => {}}/>
//                     <DueDate dueDate={task.due_date} handleChange={() => {}}/>
//                     <RemindMe date={task.remind_me} handleChange={() => {}}/>
//                     <Repeat repeat={task.repeat} handleChange={() => {}}/> */}
//                 </View>

//             </View>
          
//             <View style={styles.footer}>
//                 <DeleteIcon />
//                 <Text style={styles.save} onPress={() => save}>Save</Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: '#fff',
//         marginTop: 30,
//         // borderTopEndRadius: 20,
//         // borderTopStartRadius: 20,
//         padding: 20,
//     },
//     view:{
//         flex: 4,
//         flexDirection: 'column',
//     },
//     contents: {
       
//     },
//     header:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//     },
//     headerText: {
//         fontFamily: "Roboto",
//         fontStyle: "normal",
//         fontWeight: "bold",
//         fontSize: 18,
//         lineHeight: 21,
//         letterSpacing: 0.5,
//         textTransform: 'uppercase',
//         color: "#171725",
//     },
//     footer:{
//         bottom: 0,
//         borderTopWidth: 1,
//         borderTopColor: '#E6E6F0',
//         paddingTop: 5,
//         // shadowColor: "#000",
//         // shadowOffset: {
//         //     width: 10,
//         //     height: 10,

//         // },
//         // flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     save: {
//         borderRadius: 6,
//         backgroundColor: "#6a8ce6",
//         paddingLeft: 20,
//         paddingRight: 20,
//         paddingTop: 10,
//         paddingBottom: 10,
//         fontFamily: "Roboto",
//         fontStyle: "normal",
//         fontWeight: "bold",
//         fontSize: 14,
//         lineHeight: 16,
//         letterSpacing: 0.1,
//         color: "#FAFAFB",
//     }
// })

// export default ViewTask